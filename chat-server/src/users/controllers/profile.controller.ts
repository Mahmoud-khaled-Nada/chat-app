import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Post,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Routes, Services, UserProfileFileFields } from '@/utils/constants';
import { Auth } from '@/utils/decorators';
import { UpdateUserProfileParams, UserProfileFiles } from '@/utils/types';
import { User } from '@/utils/typeorm';
import { IProfileService } from '../users';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../jwt.auth.guard';
import { Request } from 'express';

@Controller(`${Routes.USERS}/${Routes.PROFILE}`)
export class ProfileController {
  constructor(
    @Inject(Services.PROFILE) private readonly profileService: IProfileService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post("update")
  @UseInterceptors(FileFieldsInterceptor(UserProfileFileFields)) // ✅ Ensure it matches Postman field names
  async update(
    @Auth() user: User,
    @UploadedFiles() files?: UserProfileFiles,
    @Body() body?: { about?: string },
  ) {
    console.log("Full Request Body:", body);
    console.log("Uploaded Files:", files);

    if (!body) throw new BadRequestException("Missing body parameters");

    const params: UpdateUserProfileParams = {};

    if (body.about) params.about = body.about;
    if (files?.avatar?.length) params.avatar = files.avatar[0];

    console.log("Received params:", params);

    await this.profileService.createProfileOrUpdate(user, params);
    return { message: "Profile updated successfully" };
  }
}
