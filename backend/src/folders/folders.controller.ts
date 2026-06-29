import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SupabaseAuthGuard } from '../auth/supabase-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { CurrentUserPayload } from '../auth/current-user.decorator';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';

@Controller('folders')
export class FoldersController {
  constructor(private readonly foldersService: FoldersService) {}

  @Post()
  @UseGuards(SupabaseAuthGuard)
  create(
    @CurrentUser() user: CurrentUserPayload,
    @Body() dto: CreateFolderDto,
  ) {
    return this.foldersService.create(user.id, dto);
  }

  @Get()
  @UseGuards(SupabaseAuthGuard)
  findAllForOwner(
    @CurrentUser() user: CurrentUserPayload,
    @Query('offset') offset = '0',
    @Query('limit') limit = '10',
  ) {
    return this.foldersService.findAllForOwner(
      user.id,
      Number(offset),
      Number(limit),
    );
  }

  // Public: powers the logged-out Landing page's "Shared Resources" section.
  @Get('shared')
  findShared(@Query('offset') offset = '0', @Query('limit') limit = '10') {
    return this.foldersService.findShared(Number(offset), Number(limit));
  }

  @Patch(':id')
  @UseGuards(SupabaseAuthGuard)
  update(
    @Param('id') id: string,
    @CurrentUser() user: CurrentUserPayload,
    @Body() dto: UpdateFolderDto,
  ) {
    return this.foldersService.update(id, user.id, dto);
  }

  @Delete(':id')
  @UseGuards(SupabaseAuthGuard)
  remove(@Param('id') id: string, @CurrentUser() user: CurrentUserPayload) {
    return this.foldersService.remove(id, user.id);
  }
}
