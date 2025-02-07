import { User } from '@/utils/typeorm';
import { CreateUserDto } from './dtos/CreateUserDto';

export interface IUsersService {
    createUser(payload: CreateUserDto): Promise<User>;
}
