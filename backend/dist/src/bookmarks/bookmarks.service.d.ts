import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
export declare class BookmarksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(ownerId: string, dto: CreateBookmarkDto): Promise<{
        id: string;
        createdAt: Date;
        ownerId: string;
        folderId: string;
    }>;
    remove(ownerId: string, folderId: string): Promise<void>;
    findAllForOwner(ownerId: string, offset: number, limit: number): Promise<{
        rows: ({
            folder: {
                owner: {
                    name: string | null;
                    id: string;
                    email: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                folderName: string;
                description: string | null;
                tags: string[];
                allowContribution: boolean;
                isShared: boolean;
                sharedAt: Date | null;
                ownerId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            ownerId: string;
            folderId: string;
        })[];
        total: number;
    }>;
}
