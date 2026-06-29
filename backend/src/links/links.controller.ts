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
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  @UseGuards(SupabaseAuthGuard)
  create(@CurrentUser() user: CurrentUserPayload, @Body() dto: CreateLinkDto) {
    return this.linksService.create(user.id, dto);
  }

  // Public: powers link previews on the logged-out Landing page.
  @Get()
  findByFolder(@Query('folderId') folderId: string) {
    return this.linksService.findByFolder(folderId);
  }

  // Public: powers link counts on the logged-out Landing page.
  @Get('count')
  async count(@Query('folderId') folderId: string) {
    return { count: await this.linksService.count(folderId) };
  }

  @Delete(':id')
  @UseGuards(SupabaseAuthGuard)
  remove(@Param('id') id: string, @CurrentUser() user: CurrentUserPayload) {
    return this.linksService.remove(id, user.id);
  }
}
