import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
  Inject,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from './jwt.auth.guard';
import { CreateUserDto } from './dtos/CreateUserDto';
import { Routes, Services } from '@/utils/constants';
import { IUsersService } from './users';
import { Res } from '@/utils/response';
import { User } from '@/utils/typeorm';
import { Auth } from '@/utils/decorators';

@Controller(Routes.USERS)
export class UsersController {
  constructor(
    @Inject(Services.USERS) private readonly usersService: IUsersService,
  ) {}

  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    await this.usersService.createUser(dto);
    return Res.success(null, 'User created successfully');
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Auth() user: User) {
    return user;
  }
}
