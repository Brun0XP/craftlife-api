import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import * as fs from 'fs';
import * as path from 'path';
import { UserModule } from "src/user/user.module";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { TebexService } from "src/checkout/tebex/tebex.service";
import { PassportModule } from "@nestjs/passport";

@Module({
  providers: [
    ProductService,
    TebexService,
  ],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [
    ProductController,
  ],
  exports: [ProductService],
})
export class ProductModule {}