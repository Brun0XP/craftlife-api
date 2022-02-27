import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { EmailModule } from 'src/email/email.module';
import { AuthModule } from '../auth/auth.module';
import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';
import { CheckoutController } from './checkout.controller';
import { CheckoutService } from './checkout.service';
import { MercadopagoService } from './mercadopago/mercadopago.service';
import { TebexService } from './tebex/tebex.service';

@Module({
  controllers: [
    CheckoutController,
  ],
  imports: [
    AuthModule,
    ProductModule,
    UserModule,
    EmailModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [
    MercadopagoService,
    CheckoutService,
    TebexService,
  ],
})
export class CheckoutModule {}
