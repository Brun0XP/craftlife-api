import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CheckoutModule } from './checkout/checkout.module';
import { MYSQL_CONNECTION } from './constants';
import { EmailModule } from './email/email.module';
import { PaymentModule } from './payment/payment.module';
import { ProductModule } from './product/product.module';
import { ServerModule } from './server/server.module';
import { UserModule } from './user/user.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    UserModule,
    CheckoutModule,
    EmailModule,
    WebhookModule,
    ServerModule,
    PaymentModule,
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      schema: process.env.POSTGRES_SCHEMA,
      entities: [__dirname + '/model/postgres/**/*.model{.ts,.js}'],
      migrations: [__dirname + '/migration/*{.ts,.js}'],
      migrationsRun: true,
      logging: process.env.NODE_ENV === 'dev' ? 'all' : ['error'],
    }),
    TypeOrmModule.forRoot({
      name: MYSQL_CONNECTION,
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: +process.env.MYSQL_PORT,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [__dirname + '/model/mysql/**/*.model{.ts,.js}'],
      logging: process.env.NODE_ENV === 'dev' ? 'all' : ['error'],
      logger: process.env.NODE_ENV === 'dev' ? 'advanced-console' : 'debug',
    }),
  ],
  providers: [],
  controllers: [],
})
export class AppModule { }
