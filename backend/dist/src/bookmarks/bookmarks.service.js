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
exports.BookmarksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookmarksService = class BookmarksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(ownerId, dto) {
        return this.prisma.bookmark.upsert({
            where: { ownerId_folderId: { ownerId, folderId: dto.folderId } },
            update: {},
            create: { ownerId, folderId: dto.folderId },
        });
    }
    async remove(ownerId, folderId) {
        try {
            await this.prisma.bookmark.delete({
                where: { ownerId_folderId: { ownerId, folderId } },
            });
        }
        catch {
        }
    }
    async findAllForOwner(ownerId, offset, limit) {
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
};
exports.BookmarksService = BookmarksService;
exports.BookmarksService = BookmarksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookmarksService);
//# sourceMappingURL=bookmarks.service.js.map