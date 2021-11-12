import { IsDate, IsString } from 'class-validator';

export class CreateFixtureDto {
  public _id?: any;

  @IsString()
  public uniqueid: string;

  public teamA: any;

  public teamB: any;

  @IsString()
  public playofftime: Date;

  @IsString()
  public matchdate: Date;

  @IsString()
  public venue: string;

  @IsString()
  public status: String;

  public contendingtitle: any;

  @IsString()
  public createdAt?: Date;

  @IsString()
  public updateAt?: Date;
}
