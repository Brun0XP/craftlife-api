import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/model/postgres/user.model";
import { UserService } from "./user.service";

@Module({
  providers: [UserService],
  imports: [
    TypeOrmModule.forFeature([User]),
    // PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  exports: [
    UserService,
  ],
  controllers: [
    // UserController,
  ],
})
export class UserModule {}
