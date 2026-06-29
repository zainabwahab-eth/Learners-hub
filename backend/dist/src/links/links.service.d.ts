import { PrismaService } from '../prisma/prisma.service';
import { CreateLinkDto } from './dto/create-link.dto';
export declare class LinksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(ownerId: string, dto: CreateLinkDto): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        description: string | null;
        ownerId: string;
        folderId: string;
        title: string;
    }>;
    findByFolder(folderId: string): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        description: string | null;
        ownerId: string;
        folderId: string;
        title: string;
    }[]>;
    count(folderId: string): Promise<number>;
    remove(id: string, ownerId: string): Promise<{
        count: number;
        folderUnshared: boolean;
    }>;
}
