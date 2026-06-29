"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoldersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FoldersService = class FoldersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(ownerId, dto) {
        return this.prisma.folder.create({
            data: {
                folderName: dto.folderName,
                description: dto.description,
                ownerId,
            },
        });
    }
    async findAllForOwner(ownerId, offset, limit) {
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
    async findShared(offset, limit) {
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
    async findOwned(id, ownerId) {
        const folder = await this.prisma.folder.findUnique({ where: { id } });
        if (!folder)
            throw new common_1.NotFoundException('Folder not found');
        if (folder.ownerId !== ownerId) {
            throw new common_1.ForbiddenException('You do not own this folder');
        }
        return folder;
    }
    async update(id, ownerId, dto) {
        const folder = await this.findOwned(id, ownerId);
        const data = {
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
                    throw new common_1.BadRequestException("You can't share a folder with no links");
                }
                data.sharedAt = new Date();
            }
            else if (!dto.isShared) {
                data.sharedAt = null;
            }
        }
        return this.prisma.folder.update({ where: { id }, data });
    }
    async remove(id, ownerId) {
        await this.findOwned(id, ownerId);
        await this.prisma.folder.delete({ where: { id } });
    }
};
exports.FoldersService = FoldersService;
exports.FoldersService = FoldersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FoldersService);
//# sourceMappingURL=folders.service.js.map