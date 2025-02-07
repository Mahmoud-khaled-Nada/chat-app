import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from '@/utils/typeorm';
import { IUsersService } from './users';
import { CreateUserDto } from './dtos/CreateUserDto';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(payload: CreateUserDto): Promise<User> {
    const isExists = await this.findByEmail(payload.email);

    if (isExists) {
      throw new HttpException(
        { success: false, message: 'User already exists' },
        HttpStatus.CONFLICT,
      );
    }
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = this.userRepository.create({
      username: payload.username,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'username', 'email', 'firstName', 'lastName', 'password'],
    });
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { username },
      select: ['id', 'username', 'email', 'firstName', 'lastName', 'password'],
    });
  }
  

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }
}
