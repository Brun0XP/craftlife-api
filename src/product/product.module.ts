import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import * as fs from 'fs';
import * as path from 'path';
import { UserModule } from "src/user/user.module";
import { ProductService } from "./product.service";
import { TebexService } from "src/tebex/tebex.service";
import { ProductController } from "./product.controller";

@Module({
  providers: [
    ProductService,
    TebexService,
  ],
  imports: [],
  controllers: [
    ProductController,
  ],
  exports: [ProductService],
})
export class ProductModule {}