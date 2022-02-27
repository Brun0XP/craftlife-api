import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TebexService } from "src/checkout/tebex/tebex.service";
import { User } from "src/model/postgres/user.model";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  providers: [UserService, TebexService],
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  exports: [
    UserService,
  ],
  controllers: [
    UserController,
  ],
})
export class UserModule {}
