import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Profile, User } from '@/utils/typeorm';
import { IProfileService, IUsersService } from '../users';
import { CreateUserDto } from '../dtos/CreateUserDto';
import { Services } from '@/utils/constants';
import { AuthService } from '@/auth/auth.service';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @Inject(forwardRef(() => AuthService)) 
    private readonly authService: AuthService, // ✅ Ensure correct injection
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(payload: CreateUserDto) {
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

    this.userRepository.save(user);

    return this.authService.login(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'username', 'email', 'firstName', 'lastName', 'password'],
    });
  }

  async findUser(email: string): Promise<User | undefined> {
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

  async profile(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['profile'],
    });

    return user;
  }
}
