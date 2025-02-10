import { Module } from '@nestjs/common';
import { ConversationsModule } from '../conversations/conversations.module';
import { Services } from '../utils/constants';
import { MessagingGateway } from './gateway';
import { GatewaySessionManager } from './gateway.session';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/utils/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConversationsModule],
  providers: [
    MessagingGateway,
    {
      provide: Services.GATEWAY_SESSION_MANAGER,
      useClass: GatewaySessionManager,
    },
  ],
  exports: [
    MessagingGateway,
    {
      provide: Services.GATEWAY_SESSION_MANAGER,
      useClass: GatewaySessionManager,
    },
  ],
})
export class GatewayModule {}
