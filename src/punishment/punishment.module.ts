import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ban } from "src/model/postgres/litebans/ban.model";
import { History } from "src/model/postgres/litebans/history.model";
import { Kick } from "src/model/postgres/litebans/kick.model";
import { Mute } from "src/model/postgres/litebans/mute.model";
import { Warning } from "src/model/postgres/litebans/warning.model";
import { PunishmentController } from "./punishment.controller";
import { PunishmentService } from "./punishment.service";

@Module({
  providers: [PunishmentService],
  imports: [
    TypeOrmModule.forFeature([Ban, Kick, Mute, Warning, History]),
  ],
  exports: [],
  controllers: [
    PunishmentController,
  ],
})
export class PunishmentModule {}
