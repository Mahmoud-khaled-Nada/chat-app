import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile, User } from '@/utils/typeorm';
import { Services } from '@/utils/constants';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { ProfileController } from './controllers/profile.controller';
import { ProfileService } from './services/profile.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile]), forwardRef(() => AuthModule)],
  controllers: [UsersController, ProfileController],
  providers: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
    {
      provide: Services.PROFILE,
      useClass: ProfileService,
    },
  ],
  exports: [
    {
      provide: Services.PROFILE,
      useClass: ProfileService,
    },
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
