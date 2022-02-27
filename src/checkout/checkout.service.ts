import { Injectable, Logger } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional-cls-hooked';

import { User } from '../model/postgres/user.model';
import { ProductService } from '../product/product.service';
import { MercadopagoService } from './mercadopago/mercadopago.service';
import { PaymentDTO } from 'src/dto/payment.dto';

@Injectable()
export class CheckoutService {

  private readonly logger = new Logger(CheckoutService.name);

  constructor(
    private readonly mercadopagoService: MercadopagoService,
    private readonly productService: ProductService,
  ) {}

  @Transactional()
  async checkoutPix(user: User, payment: PaymentDTO) : Promise<any> {
    const product = await this.productService.getProduct(payment.productId);
    const result = await this.mercadopagoService.createPayment({
      description: `${product.name} de ${user.realname}`,
      installments: 1,
      payment_method_id: 'pix',
      transaction_amount: +product.price,
      metadata: {
        product_id: +product.id,
        username: user.realname,
      },
      payer: {
        email: payment.email, 
        first_name: payment.firstName,
        last_name: payment.lastName,
        identification: {
          type: 'CPF',
          number: payment.cpf.replace('.', '').replace('.', '').replace('-', '')
        },
      },
    });

    return result;
  }
}
