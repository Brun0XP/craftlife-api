import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PaymentDTO } from "src/dto/payment.dto";
import { CheckoutService } from "./checkout.service";


@UseGuards(AuthGuard())
@Controller('payments')
export class CheckoutController {

  constructor(
    private checkoutService: CheckoutService,
  ) { }

  // @Post('card')
  // async checkoutCard(@Request() req, @Body() payment: CardPaymentDTO) {
  //   await this.checkoutService.checkoutCard(req.user, payment);
  // }

  // @Post('ticket')
  // async checkoutTicket(@Request() req, @Body() payment: TicketPaymentDTO) {
  //   const { resource, barcode } = await this.checkoutService.checkoutTicket(req.user, payment);
  //   return { resource, barcode };
  // }

  // @Post('order')
  // async checkoutOrder(@Request() req, @Body() payment: PaymentDTO) {
  //   const { resource } = await this.checkoutService.checkoutOrder(req.user, payment);
  //   return { resource };
  // }

  @Post('pix')
  async checkoutPix(@Request() req, @Body() payment: PaymentDTO) {
    const { qr_code, qr_code_base64 } = await this.checkoutService.checkoutPix(req.user, payment);
    return { qr_code, qr_code_base64 };
  }

}
