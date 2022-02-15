import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import * as fs from 'fs';
import * as path from 'path';
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";

@Module({
  providers: [
    AuthService,
    LocalStrategy,
  ],
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        privateKey: fs.readFileSync(path.join(process.cwd(), process.env.JWT_PRIVATE_KEY_PATH)),
        publicKey: fs.readFileSync(path.join(process.cwd(), process.env.JWT_PUBLIC_KEY_PATH)),
        signOptions: { expiresIn: '1d', algorithm: 'RS256' },
      }),
    }),
    UserModule,
    // PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [
    AuthController,
  ],
  exports: [AuthService],
})
export class AuthModule {}