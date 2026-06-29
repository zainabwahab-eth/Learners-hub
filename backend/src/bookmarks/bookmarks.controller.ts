import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SupabaseAuthGuard } from '../auth/supabase-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { CurrentUserPayload } from '../auth/current-user.decorator';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
@UseGuards(SupabaseAuthGuard)
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  create(
    @CurrentUser() user: CurrentUserPayload,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.bookmarksService.create(user.id, dto);
  }

  @Get()
  findAllForOwner(
    @CurrentUser() user: CurrentUserPayload,
    @Query('offset') offset = '0',
    @Query('limit') limit = '10',
  ) {
    return this.bookmarksService.findAllForOwner(
      user.id,
      Number(offset),
      Number(limit),
    );
  }

  @Delete(':folderId')
  remove(
    @Param('folderId') folderId: string,
    @CurrentUser() user: CurrentUserPayload,
  ) {
    return this.bookmarksService.remove(user.id, folderId);
  }
}
