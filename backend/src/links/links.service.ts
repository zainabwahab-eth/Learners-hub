import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLinkDto } from './dto/create-link.dto';

@Injectable()
export class LinksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(ownerId: string, dto: CreateLinkDto) {
    const folder = await this.prisma.folder.findUnique({
      where: { id: dto.folderId },
    });
    if (!folder) throw new NotFoundException('Folder not found');
    if (folder.ownerId !== ownerId) {
      throw new ForbiddenException('You do not own this folder');
    }

    return this.prisma.link.create({
      data: {
        title: dto.title,
        url: dto.url,
        description: dto.description,
        folderId: dto.folderId,
        ownerId,
      },
    });
  }

  async findByFolder(folderId: string) {
    return this.prisma.link.findMany({
      where: { folderId },
      orderBy: { createdAt: 'asc' },
    });
  }

  async count(folderId: string) {
    return this.prisma.link.count({ where: { folderId } });
  }

  async remove(id: string, ownerId: string) {
    const link = await this.prisma.link.findUnique({ where: { id } });
    if (!link) throw new NotFoundException('Link not found');
    if (link.ownerId !== ownerId) {
      throw new ForbiddenException('You do not own this link');
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.link.delete({ where: { id } });

      const remaining = await tx.link.count({
        where: { folderId: link.folderId },
      });

      let folderUnshared = false;
      if (remaining === 0) {
        const folder = await tx.folder.findUnique({
          where: { id: link.folderId },
        });
        if (folder?.isShared) {
          await tx.folder.update({
            where: { id: link.folderId },
            data: { isShared: false, sharedAt: null },
          });
          folderUnshared = true;
        }
      }

      return { count: remaining, folderUnshared };
    });
  }
}
