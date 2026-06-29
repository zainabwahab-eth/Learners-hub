import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateLinkDto {
  @IsString()
  folderId: string;

  @IsString()
  title: string;

  @IsUrl()
  url: string;

  @IsOptional()
  @IsString()
  description?: string;
}
