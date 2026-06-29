import type { CurrentUserPayload } from '../auth/current-user.decorator';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
export declare class FoldersController {
    private readonly foldersService;
    constructor(foldersService: FoldersService);
    create(user: CurrentUserPayload, dto: CreateFolderDto): Promise<{
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
    findAllForOwner(user: CurrentUserPayload, offset?: string, limit?: string): Promise<{
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
    findShared(offset?: string, limit?: string): Promise<{
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
    update(id: string, user: CurrentUserPayload, dto: UpdateFolderDto): Promise<{
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
    remove(id: string, user: CurrentUserPayload): Promise<void>;
}
