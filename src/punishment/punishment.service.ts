import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ban } from 'src/model/postgres/litebans/ban.model';
import { Kick } from 'src/model/postgres/litebans/kick.model';
import { Mute } from 'src/model/postgres/litebans/mute.model';
import { Warning } from 'src/model/postgres/litebans/warning.model';
import { Repository } from 'typeorm';

@Injectable()
export class PunishmentService {

  constructor(
    @InjectRepository(Ban)
    private readonly banRepository: Repository<Ban>,
    @InjectRepository(Kick)
    private readonly kickRepository: Repository<Kick>,
    @InjectRepository(Mute)
    private readonly muteRepository: Repository<Mute>,
    @InjectRepository(Warning)
    private readonly warningRepository: Repository<Warning>,
  ) {}

  async getBans(page: number, limit: number) {
    return await this.banRepository
      .createQueryBuilder('ban')
      .leftJoinAndMapOne('ban.history', 'litebans_history', 'history', 'history.uuid = ban.uuid')
      .orderBy('ban.id', 'DESC')
      .offset(limit * (page - 1))
      .limit(limit)
      .getMany();
  }

  async getKicks(page: number, limit: number) {
    return await this.kickRepository
      .createQueryBuilder('ban')
      .leftJoinAndMapOne('ban.history', 'litebans_history', 'history', 'history.uuid = ban.uuid')
      .orderBy('ban.id', 'DESC')
      .offset(limit * (page - 1))
      .limit(limit)
      .getMany();
  }

  async getMutes(page: number, limit: number) {
    return await this.muteRepository
      .createQueryBuilder('ban')
      .leftJoinAndMapOne('ban.history', 'litebans_history', 'history', 'history.uuid = ban.uuid')
      .orderBy('ban.id', 'DESC')
      .offset(limit * (page - 1))
      .limit(limit)
      .getMany();
  }

  async getWarnings(page: number, limit: number) {
    return await this.warningRepository
      .createQueryBuilder('ban')
      .leftJoinAndMapOne('ban.history', 'litebans_history', 'history', 'history.uuid = ban.uuid')
      .orderBy('ban.id', 'DESC')
      .offset(limit * (page - 1))
      .limit(limit)
      .getMany();
  }
}