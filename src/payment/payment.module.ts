import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Payment } from "src/model/postgres/payment.model";
import { PaymentService } from "./payment.service";

@Module({
  providers: [PaymentService],
  imports: [
    TypeOrmModule.forFeature([Payment]),
  ],
  controllers: [],
  exports: [PaymentService],
})
export class PaymentModule {}