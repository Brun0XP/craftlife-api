import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/model/postgres/user.model";
import * as crypto from 'crypto';
import { UserService } from "src/user/user.service";


@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) { }

  async validateUser(username: string, password: string): Promise<User | undefined> {
    const user = await this.userService.findByUsernameOrEmail(username);
    return user && this.validatePassword(password, user.password) ? user : undefined;
  }

  async login(user: User): Promise<{ access_token: string, hasEmail: boolean }> {
    const payload = {
      name: user.realname || user.username,
      sub: user.username,
    };
    return {
      access_token: await this.jwtService.sign(payload, { expiresIn: '3y' }),
      hasEmail: !!user.email,
    };
  }

  private validatePassword(password: string, expected: string): boolean {
    const parts = expected.split('$');
    const actual = this.sha256(this.sha256(password) + parts[2]);
    return parts[3].toLowerCase() === actual.toLowerCase();
  }

  private sha256(input: string): string {
    return crypto.createHash('sha256').update(input, 'utf8').digest('hex');
  }

}