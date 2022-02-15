import { Controller, Get, Param } from "@nestjs/common"
import { ProductService } from "./product.service"

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) { }

  @Get()
  async getPackages(): Promise<any> {
    return await this.productService.getPackages();
  }

  @Get(':id')
  async getPackage(@Param('id') id: number): Promise<any> {
    return await this.productService.getPackage(id);
  }
}