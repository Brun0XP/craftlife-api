import { Injectable } from "@nestjs/common";
import { TebexService } from "src/tebex/tebex.service";

@Injectable()
export class ProductService {

  constructor(
    private readonly tebexService: TebexService,
  ) { }

  async getPackages(): Promise<any> {
    return await this.tebexService.getPackages();
  }

  async getPackage(id: number): Promise<any> {
    return await this.tebexService.getPackage(id);
  }

}