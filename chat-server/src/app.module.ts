import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import entities from '@/utils/typeorm';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesModule } from './messages/messages.module';

let envFilePath = '.env';
if (process.env.APP_ENV === 'PRODUCTION') envFilePath = '.env.production';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath }),
    PassportModule.register({ session: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: true,
      entities,
      logging: false,
    }),

    AuthModule,
    UsersModule,
    ConversationsModule,
    MessagesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
