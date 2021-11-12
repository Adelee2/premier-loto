import { IsDate, IsString } from 'class-validator';

export class CreateTeamDto {
  public _id?: any;

  @IsString()
  public clubname: any;

  @IsString()
  public abrv: string;

  @IsString()
  public history: string;
}
