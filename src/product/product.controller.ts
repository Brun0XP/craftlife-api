import { Controller, Get, Param, Request, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport";
import { ProductService } from "./product.service"

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) { }

  @Get()
  async getPackages(): Promise<any> {
    return await this.productService.getProductTree();
  }

  @UseGuards(AuthGuard())
  @Get('purchase_history')
  async getPurchaseHistory(@Request() request): Promise<any> {
    return await this.productService.getPurchaseHistory(request.user.username);
  }

  @Get(':id')
  async getPackage(@Param('id') id: number): Promise<any> {
    return await this.productService.getProduct(id);
  }

}