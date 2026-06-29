import { IsOptional, IsString } from 'class-validator';

export class CreateFolderDto {
  @IsString()
  folderName: string;

  @IsOptional()
  @IsString()
  description?: string;
}
