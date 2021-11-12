import { IsDate, IsString } from 'class-validator';

export class CreateTitleDto {
  public _id?: any;

  @IsString()
  public titlename: string;

  @IsString()
  public starttime: Date;

  @IsString()
  public proposedendtime: Date;

  @IsString()
  public description: String;
}
