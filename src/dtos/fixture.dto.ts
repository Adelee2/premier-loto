import { IsDate, IsString } from 'class-validator';

export class CreateFixtureDto {
  public _id?: any;

  @IsString()
  public uniqueid: string;

  @IsString()
  public teamA: any;

  @IsString()
  public teamB: any;

  @IsString()
  public playofftime: Date;

  @IsString()
  public matchdate: Date;

  @IsString()
  public venue: string;

  @IsString()
  public status: String;

  @IsString()
  public contendingtitle: any;
}
