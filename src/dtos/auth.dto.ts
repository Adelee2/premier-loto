import { IsEmail, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
