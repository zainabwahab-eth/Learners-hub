import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { FoldersModule } from './folders/folders.module';
import { LinksModule } from './links/links.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    FoldersModule,
    LinksModule,
    BookmarksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
