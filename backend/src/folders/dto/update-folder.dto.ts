import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateFolderDto {
  @IsOptional()
  @IsString()
  folderName?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(4)
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsBoolean()
  allowContribution?: boolean;

  @IsOptional()
  @IsBoolean()
  isShared?: boolean;
}
