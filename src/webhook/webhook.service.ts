import { Injectable } from "@nestjs/common";
import { MercadopagoWebhook } from "src/checkout/mercadopago/mercadopago.interface";
import { MercadopagoService } from "src/checkout/mercadopago/mercadopago.service";
import { TebexService } from "src/checkout/tebex/tebex.service";
import { Payment } from "src/model/postgres/payment.model";

@Injectable()
export class WebhookService {
  constructor(
    private readonly mercadopagoService: MercadopagoService,
    private readonly tebexService: TebexService,
  ) {}

  async mercadopagoPayment(webhook: MercadopagoWebhook) {
    if (webhook.action === 'payment.created')
      this.createPayment(webhook);

    const payment = await this.mercadopagoService.getPayment(webhook.data.id);
    
  }

  async createPayment(webhook: MercadopagoWebhook) {
    const payment: Payment = await this.mercadopagoService.getPayment(webhook.data.id);
    if (payment.status === 'approved') {
      this.tebexService.activateProduct(payment);
      
    }
  }
}