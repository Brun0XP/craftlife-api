import { Injectable } from "@nestjs/common";
import Axios from 'axios';

@Injectable()
export class TebexService {

  async activateProduct(payment: any): Promise<void> {
    await Axios.post('https://plugin.tebex.io/payments', {
      packages: [
        {
          id: +payment.metadata.product_id,
          options: {},
        },
      ],
      price: +payment.transaction_amount,
      ign: payment.metadata.username,
      note: `Pagamento via site. MP: ${payment.id}`,
    }, {
      headers: {
        'X-Tebex-Secret': process.env.TEBEX_SECRET,
      },
    });
  }

  async getPackages(): Promise<any> {
    return (await Axios.get('https://plugin.tebex.io/listing', {
      headers: {
        'X-Tebex-Secret': process.env.TEBEX_SECRET,
      },
    })).data;
  }

  async getPackage(id: number): Promise<any> {
    return (await Axios.get('https://plugin.tebex.io/package/' + id, {
      headers: {
        'X-Tebex-Secret': process.env.TEBEX_SECRET,
      },
    })).data;
  }

  async getPlayerLookup(username: string): Promise<any> {
    return (await Axios.get('https://plugin.tebex.io/user/' + username, {
      headers: {
        'X-Tebex-Secret': process.env.TEBEX_SECRET,
      },
    })).data;
  }

  async getPayment(id: string) {
    return (await Axios.get('https://plugin.tebex.io/payments/' + id, {
      headers: {
        'X-Tebex-Secret': process.env.TEBEX_SECRET,
      },
    })).data;
  }

} 
