import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "src/model/postgres/payment.model";
import { Repository } from "typeorm";

@Injectable()
export class PaymentService {
  
  constructor(
    @InjectRepository(Payment) private readonly paymentRepository: Repository<Payment>,
  ) {}

  async insertPayment(payment: Payment) {
    await this.paymentRepository.insert(payment);    
  }
}