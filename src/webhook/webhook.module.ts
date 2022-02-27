import { Module } from "@nestjs/common";
import { MercadopagoService } from "src/checkout/mercadopago/mercadopago.service";
import { TebexService } from "src/checkout/tebex/tebex.service";
import { WebhookController } from "./webhook.controller";
import { WebhookService } from "./webhook.service";

@Module({
  providers: [
    WebhookService,
    MercadopagoService,
    TebexService
  ],
  imports: [],
  controllers: [
    WebhookController,
  ],
  exports: [],
})
export class WebhookModule {}