import type { CurrentUserPayload } from '../auth/current-user.decorator';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
export declare class LinksController {
    private readonly linksService;
    constructor(linksService: LinksService);
    create(user: CurrentUserPayload, dto: CreateLinkDto): Promise<{
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
    count(folderId: string): Promise<{
        count: number;
    }>;
    remove(id: string, user: CurrentUserPayload): Promise<{
        count: number;
        folderUnshared: boolean;
    }>;
}
