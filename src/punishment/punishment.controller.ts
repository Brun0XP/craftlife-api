import { Controller, Get, Query } from "@nestjs/common";
import { PunishmentService } from "./punishment.service";

@Controller('punishment')
export class PunishmentController {

  constructor(
    private readonly punishmentService: PunishmentService,
  ) { }

  @Get('bans')
  async getBans(@Query() query) {
    return await this.punishmentService.getBans(
      query.page | 1,
      query.limit ? query.limit > 100 ? 100 : query.limit : 10
    );
  }

  @Get('kicks')
  async getKicks(@Query() query) {
    return await this.punishmentService.getKicks(
      query.page | 1,
      query.limit ? query.limit > 100 ? 100 : query.limit : 10
    );
  }

  @Get('mutes')
  async getMutes(@Query() query) {
    return await this.punishmentService.getMutes(
      query.page | 1,
      query.limit ? query.limit > 100 ? 100 : query.limit : 10
    );
  }

  @Get('warnings')
  async getWarnings(@Query() query) {
    return await this.punishmentService.getWarnings(
      query.page | 1,
      query.limit ? query.limit > 100 ? 100 : query.limit : 10
    );
  }
}
