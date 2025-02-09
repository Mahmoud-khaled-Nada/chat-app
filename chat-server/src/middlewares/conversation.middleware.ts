import { Services } from '@/utils/constants';
import { AuthenticatedRequest } from '@/utils/types';
import {
  Inject,
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { NextFunction, Response } from 'express';

@Injectable()
export class ConversationMiddleware implements NestMiddleware {
  constructor() //   @Inject(Services.CONVERSATIONS)
  //   private readonly conversationService: IConversationsService,
  {}

  async use(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    console.log('ConversationMiddleware');
    next();
    //   const { id: userId } = req.user;
    //   const id = parseInt(req.params.id);
    //   if (isNaN(id)) throw new InvalidConversationIdException();
    //   const isReadable = await this.conversationService.hasAccess({ id, userId });
    //   console.log(isReadable);
    //   if (isReadable) next();
    //   else throw new ConversationNotFoundException();
  }
}
