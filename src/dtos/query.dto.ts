import { IsString } from 'class-validator';

export class CreateSearchDto {
  @IsString()
  public q: string;
}
export class CreateFixtureDto {
  @IsString()
  public status: string;
}
