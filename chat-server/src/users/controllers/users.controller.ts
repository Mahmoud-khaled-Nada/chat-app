import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  Inject,
  Res,
  Req,
} from '@nestjs/common';
import { User } from '@/utils/typeorm';
import { Auth } from '@/utils/decorators';
import { Routes, Services } from '@/utils/constants';
import { IUsersService } from '../users';
import { CreateUserDto } from '../dtos/CreateUserDto';
import { JwtAuthGuard } from '../jwt.auth.guard';
import { Response, Request } from 'express';

@Controller(Routes.USERS)
export class UsersController {
  constructor(
    @Inject(Services.USERS) private readonly usersService: IUsersService,
  ) {}

  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    return await this.usersService.createUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Auth() user: User) {
    return await this.usersService.profile(user.id);
  }
}
