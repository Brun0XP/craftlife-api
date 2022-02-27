import { Controller, Get, Param, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { TebexService } from "src/checkout/tebex/tebex.service";
import { UserService } from "./user.service";

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {

  constructor(
    private readonly userService: UserService,
    private readonly tebexservice: TebexService,
  ) { }

  @Get()
  async user(@Request() request) {
    const user = await this.userService.findByUsername(request.user.username);
    return {
      username: user.username,
      realname: user.realname,
      email: user.email,
    };
  }
}