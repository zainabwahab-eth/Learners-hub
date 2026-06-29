import { PrismaService } from '../prisma/prisma.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
export declare class FoldersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(ownerId: string, dto: CreateFolderDto): Promise<{
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
    }>;
    findAllForOwner(ownerId: string, offset: number, limit: number): Promise<{
        rows: {
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
        }[];
        total: number;
    }>;
    findShared(offset: number, limit: number): Promise<{
        rows: ({
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
        })[];
        total: number;
    }>;
    private findOwned;
    update(id: string, ownerId: string, dto: UpdateFolderDto): Promise<{
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
    }>;
    remove(id: string, ownerId: string): Promise<void>;
}
