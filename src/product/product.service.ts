import { Injectable } from "@nestjs/common";
import { TebexService } from "src/checkout/tebex/tebex.service";

@Injectable()
export class ProductService {

  private productTree: Object;
  private product: Object = { };

  constructor(
    private readonly tebexService: TebexService,
  ) {
    this.getProductTree().then(productTree => this.productTree = productTree);
  }

  async getProductTree(): Promise<any> {
    if (this.productTree) return this.productTree;
    return await this.tebexService.getPackages();
  }

  async getProduct(id: number): Promise<any> {
    if (this.product && this.product[id]) return this.product[id];
    this.product[id] = await this.tebexService.getPackage(id);
    return this.product[id];
  }

  async getPurchaseHistory(username: string): Promise<any> {
    return await this.tebexService.getPlayerLookup(username);
  }
}