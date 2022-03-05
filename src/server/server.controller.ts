import { Controller, Get } from "@nestjs/common";
import { ServerService } from "./server.service";

@Controller('server')
export class ServerController {

  constructor(
    private readonly serverService: ServerService
  ) {}

  @Get('status')
  async status() {
    return await this.serverService.getStatus();
  }

}
