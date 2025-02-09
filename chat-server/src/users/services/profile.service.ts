import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile, User } from '@/utils/typeorm';
import { Repository } from 'typeorm';
import { IProfileService } from '../users';
import { UpdateUserProfileParams } from '@/utils/types';
import { generateUUIDV4 } from '@/utils/helpers';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProfileService implements IProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createProfile() {
    const newProfile = this.profileRepository.create();
    return this.profileRepository.save(newProfile);
  }

  async createProfileOrUpdate(user: User, params: UpdateUserProfileParams) {
    if (!user.profile) {
      console.log('User has no profile. Creating...');
      user.profile = await this.createProfile();
      return this.updateProfile(user, params);
    }
    console.log('User has profile');
    return this.updateProfile(user, params);
  }

  async updateProfile(user: User, params: UpdateUserProfileParams) {
    console.log(params);
    if (params.avatar)
      user.profile.avatar = await this.updateAvatar(params.avatar);
    if (params.about) user.profile.about = params.about;
    return this.userRepository.save(user);
  }

  async updateAvatar(file: Express.Multer.File) {
    console.log('Updating Avatar');
    const fileExtension = path.extname(file.originalname);
    const fileName = `${generateUUIDV4()}-${fileExtension}`;

    // ✅ Define Upload Path
    const uploadDir = path.join(__dirname, '../../../uploads/profile');
    const filePath = path.join(uploadDir, fileName);

    // ✅ Ensure Upload Directory Exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // ✅ Save File to `uploads` Directory
    fs.writeFileSync(filePath, file.buffer);

    console.log('File saved at:', filePath);

    return fileName;
  }

  // async getProfile(userId: number): Promise<Profile | null> {
  //   return this.profileRepository.findOne({ where: { user: userId } });
  // }
}
