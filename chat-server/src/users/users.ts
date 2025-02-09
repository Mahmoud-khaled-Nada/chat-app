import { Profile, User } from '@/utils/typeorm';
import { CreateUserDto } from './dtos/CreateUserDto';
import { UpdateUserProfileParams } from '@/utils/types';

export interface IUsersService {
  createUser(payload: CreateUserDto);
  profile(userId: number);
  findUser(email: string);
}

export interface IProfileService {
  createProfileOrUpdate(user: User, params: UpdateUserProfileParams);
}
