import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: fs.readFileSync(path.join(process.cwd(), process.env.JWT_PUBLIC_KEY_PATH)),
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    return { username: payload.sub, realname: payload.name };
  }
}
