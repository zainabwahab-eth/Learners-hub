import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';

@Injectable()
export class FoldersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(ownerId: string, dto: CreateFolderDto) {
    return this.prisma.folder.create({
      data: {
        folderName: dto.folderName,
        description: dto.description,
        ownerId,
      },
    });
  }

  async findAllForOwner(ownerId: string, offset: number, limit: number) {
    const [rows, total] = await this.prisma.$transaction([
      this.prisma.folder.findMany({
        where: { ownerId },
        orderBy: { createdAt: 'desc' },
        skip: offset,
        take: limit,
      }),
      this.prisma.folder.count({ where: { ownerId } }),
    ]);
    return { rows, total };
  }

  async findShared(offset: number, limit: number) {
    const [rows, total] = await this.prisma.$transaction([
      this.prisma.folder.findMany({
        where: { isShared: true },
        orderBy: { sharedAt: 'desc' },
        skip: offset,
        take: limit,
        include: { owner: { select: { id: true, name: true, email: true } } },
      }),
      this.prisma.folder.count({ where: { isShared: true } }),
    ]);
    return { rows, total };
  }

  private async findOwned(id: string, ownerId: string) {
    const folder = await this.prisma.folder.findUnique({ where: { id } });
    if (!folder) throw new NotFoundException('Folder not found');
    if (folder.ownerId !== ownerId) {
      throw new ForbiddenException('You do not own this folder');
    }
    return folder;
  }

  async update(id: string, ownerId: string, dto: UpdateFolderDto) {
    const folder = await this.findOwned(id, ownerId);

    const data: Record<string, unknown> = {
      folderName: dto.folderName,
      description: dto.description,
      tags: dto.tags,
      allowContribution: dto.allowContribution,
    };

    if (dto.isShared !== undefined) {
      data.isShared = dto.isShared;
      if (dto.isShared && !folder.isShared) {
        const linkCount = await this.prisma.link.count({
          where: { folderId: id },
        });
        if (linkCount === 0) {
          throw new BadRequestException(
            "You can't share a folder with no links",
          );
        }
        data.sharedAt = new Date();
      } else if (!dto.isShared) {
        data.sharedAt = null;
      }
    }

    return this.prisma.folder.update({ where: { id }, data });
  }

  async remove(id: string, ownerId: string) {
    await this.findOwned(id, ownerId);
    await this.prisma.folder.delete({ where: { id } });
  }
}
