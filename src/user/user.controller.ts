import { Controller, Post, Body, Query, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto } from './dto/user.dto';
import {ApiTags, ApiOperation} from '@nestjs/swagger'

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @ApiOperation({
    summary: '新增用户',
  })
  @Post('/add')
  create(@Body() user: AddUserDto) {
    console.log('user', user)
    return this.userService.createOrSave(user);
  }
}