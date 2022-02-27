import { Body, Controller, Post, Request, Response } from "@nestjs/common";

import { MercadopagoWebhook } from "src/checkout/mercadopago/mercadopago.interface";
import { WebhookService } from "./webhook.service";

@Controller('webhook')
export class WebhookController {
  
  constructor(
    private readonly webhookService: WebhookService,
  ) {}

  @Post('mercadopago/payment')
  async mercadopagoPayment(@Request() request, @Response() response, @Body() body: MercadopagoWebhook) {
    this.webhookService.mercadopagoPayment(body);
    response.status(200).send('ok');
  }

}
