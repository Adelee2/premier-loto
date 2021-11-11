import { IsEmail, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
