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
exports.LinksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LinksService = class LinksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(ownerId, dto) {
        const folder = await this.prisma.folder.findUnique({
            where: { id: dto.folderId },
        });
        if (!folder)
            throw new common_1.NotFoundException('Folder not found');
        if (folder.ownerId !== ownerId) {
            throw new common_1.ForbiddenException('You do not own this folder');
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
    async findByFolder(folderId) {
        return this.prisma.link.findMany({
            where: { folderId },
            orderBy: { createdAt: 'asc' },
        });
    }
    async count(folderId) {
        return this.prisma.link.count({ where: { folderId } });
    }
    async remove(id, ownerId) {
        const link = await this.prisma.link.findUnique({ where: { id } });
        if (!link)
            throw new common_1.NotFoundException('Link not found');
        if (link.ownerId !== ownerId) {
            throw new common_1.ForbiddenException('You do not own this link');
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
};
exports.LinksService = LinksService;
exports.LinksService = LinksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LinksService);
//# sourceMappingURL=links.service.js.map