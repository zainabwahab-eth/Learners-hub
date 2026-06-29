import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(ownerId: string, dto: CreateBookmarkDto) {
    return this.prisma.bookmark.upsert({
      where: { ownerId_folderId: { ownerId, folderId: dto.folderId } },
      update: {},
      create: { ownerId, folderId: dto.folderId },
    });
  }

  async remove(ownerId: string, folderId: string) {
    try {
      await this.prisma.bookmark.delete({
        where: { ownerId_folderId: { ownerId, folderId } },
      });
    } catch {
      // Already removed — treat as success for an idempotent toggle.
    }
  }

  async findAllForOwner(ownerId: string, offset: number, limit: number) {
    const where = { ownerId, folder: { isShared: true } };
    const [rows, total] = await this.prisma.$transaction([
      this.prisma.bookmark.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: offset,
        take: limit,
        include: {
          folder: {
            include: {
              owner: { select: { id: true, name: true, email: true } },
            },
          },
        },
      }),
      this.prisma.bookmark.count({ where }),
    ]);
    return { rows, total };
  }
}
