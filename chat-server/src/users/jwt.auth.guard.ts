import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info, context) {
    if (err || !user) {
      console.log('JwtAuthGuard Error:', err || info.message);
      throw err || new UnauthorizedException('Invalid or expired token');
    }
    return user;
  }
}
