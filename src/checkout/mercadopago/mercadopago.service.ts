import { BadRequestException, Injectable } from "@nestjs/common";
import { MercadopagoPayment, MercadopagoResponse } from "./mercadopago.interface";
import * as mercadopago from 'mercadopago';
import { Payment } from "src/model/postgres/payment.model";

@Injectable()
export class MercadopagoService {
    
  constructor() {
    mercadopago.configure({
      access_token: process.env.MERCADOPAGO_SECRET,
    })
  }

  async createPayment(payment: MercadopagoPayment) {
    let response: MercadopagoResponse;

    try {
      response = (await mercadopago.payment.save({
        ...payment,
        statement_descriptor: 'CraftLife',
      })).body;
    } catch {
      throw new BadRequestException('Verifique os dados de pagamento e tente novamente');
    }
    if (response.status === 'rejected') {
      throw new BadRequestException('O seu pagamento não foi aceito');
    }
    return {
      id: response.id,
      resource: response.transaction_details && response.transaction_details.external_resource_url,
      barcode: response.barcode && response.barcode.content,
      qr_code: response.point_of_interaction && response.point_of_interaction.transaction_data 
        && response.point_of_interaction.transaction_data.qr_code,
      qr_code_base64: response.point_of_interaction && response.point_of_interaction.transaction_data
        && response.point_of_interaction.transaction_data.qr_code_base64,
    };
  }

  async getPayment(id: number): Promise<Payment>{
    const bodyResponse = (await mercadopago.payment.get(id)).body;
    return {
      id: bodyResponse.id,
      username: bodyResponse.metadata.username,
      transaction_amount: bodyResponse.transaction_amount,
      package_id: bodyResponse.metadata.product_id,
      status: bodyResponse.status,
      payment_method_id: bodyResponse.payment_method_id,
      installments: bodyResponse.installments,
      external_reference: bodyResponse.external_reference,
    };
  }
}