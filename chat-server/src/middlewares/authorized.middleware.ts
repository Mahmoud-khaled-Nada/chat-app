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
export class isAuthorized implements NestMiddleware {
  constructor() //   private readonly conversationService: IConversationsService, //   @Inject(Services.CONVERSATIONS)
  {}

  async use(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    console.log('isAuthorized');
    console.log(req.user)
    if (req.user) next();
    else throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
  }
}
