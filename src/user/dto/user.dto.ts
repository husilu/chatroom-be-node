import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  @ApiProperty({ example: 123, })
  id?: string;

  @ApiProperty({ example: 'cookie' })
  @IsNotEmpty()
  nickname: string;

  @ApiProperty({ example: 'cookieboty' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'cookieboty' })
  @IsNotEmpty()
  password: string;
}
