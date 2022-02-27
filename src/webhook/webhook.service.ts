import { Injectable } from "@nestjs/common";
import { MercadopagoWebhook } from "src/checkout/mercadopago/mercadopago.interface";
import { MercadopagoService } from "src/checkout/mercadopago/mercadopago.service";
import { TebexService } from "src/checkout/tebex/tebex.service";

@Injectable()
export class WebhookService {
  constructor(
    private readonly mercadopagoService: MercadopagoService,
    private readonly tebexService: TebexService,
  ) {}

  async mercadopagoPayment(weebhook: MercadopagoWebhook) {
    const payment = await this.mercadopagoService.getPayment(weebhook.data.id);
    if (payment.status === 'approved') {
      this.tebexService.activateProduct(payment);
    }
  }
}