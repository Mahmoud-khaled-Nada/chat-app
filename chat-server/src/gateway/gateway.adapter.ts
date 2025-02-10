import { IoAdapter } from '@nestjs/platform-socket.io';
import { NextFunction } from 'express';
import { AuthenticatedSocket } from '@/utils/types';
import { verify } from 'jsonwebtoken';
import { User } from '@/utils/typeorm';

export class WebsocketAdapter extends IoAdapter {
  createIOServer(port: number, options?: any) {
    const server = super.createIOServer(port, options);
    server.use(async (socket: AuthenticatedSocket, next: NextFunction) => {
      const { access_token }: string | any = socket.handshake.auth;

      if (!access_token)
        return next(new Error('Not Authenticated. No token provided'));

      try {
        const decodedToken: any = verify(access_token, process.env.JWT_SECRET);

        if (!decodedToken) return next(new Error('No session found'));

        socket.user = decodedToken;
        next();
      } catch (error) {
        return next(new Error('Error verifying token'));
      }
    });

    return server;
  }
}
