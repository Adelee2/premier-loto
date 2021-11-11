import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  public _id?: any;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public fullName: string;

  @IsString()
  public country: String;

  @IsString()
  public userrole: String;

  @IsString()
  public ip: String;

  @IsString()
  public accounttype: String;
}
