import type { CurrentUserPayload } from '../auth/current-user.decorator';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
export declare class BookmarksController {
    private readonly bookmarksService;
    constructor(bookmarksService: BookmarksService);
    create(user: CurrentUserPayload, dto: CreateBookmarkDto): Promise<{
        id: string;
        createdAt: Date;
        ownerId: string;
        folderId: string;
    }>;
    findAllForOwner(user: CurrentUserPayload, offset?: string, limit?: string): Promise<{
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
    remove(folderId: string, user: CurrentUserPayload): Promise<void>;
}
