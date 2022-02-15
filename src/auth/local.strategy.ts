import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor( 
    private readonly authService: AuthService
  ) { 
    super({
      passReqToCallback: true,
    });
  }

  async validate(req: Request, cpf: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(cpf, password);
    if (!user) {
      throw new UnauthorizedException("Usuário ou senha incorretos.");
    }
    return user;
  }

}