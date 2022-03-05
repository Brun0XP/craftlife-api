import { Injectable } from "@nestjs/common";
import Axios from "axios";

@Injectable()
export class ServerService {
  constructor() {}

  async getStatus(): Promise<{players_online: number, version: string}> {
    const response = (await Axios.get('https://api.mcsrvstat.us/2/play.craftlife.com.br')).data;

    return {
      players_online: response.players.online,
      version: response.version,
    }
  }
}