import { Injectable } from "@nestjs/common";
import Axios from 'axios';

@Injectable()
export class TebexService {

  // async activateProduct(product: Product, user: User, paymentId: number): Promise<void> {
  //   await Axios.post('https://plugin.tebex.io/payments', {
  //     packages: [
  //       {
  //         id: +product.package,
  //         options: {},
  //       },
  //     ],
  //     price: +product.price,
  //     ign: user.username,
  //     note: `Pagamento via site. MP: ${paymentId}`,
  //   }, {
  //     headers: {
  //       'X-Tebex-Secret': process.env.TEBEX_SECRET,
  //     },
  //   });
  // }

  async getPackages(): Promise<any> {
    const response = await Axios.get('https://plugin.tebex.io/listing', {
      headers: {
        'X-Tebex-Secret': process.env.TEBEX_SECRET,
      },
    });
    return response.data;
  }

  async getPackage(id: number): Promise<any> {
    const response = await Axios.get('https://plugin.tebex.io/package/' + id, {
      headers: {
        'X-Tebex-Secret': process.env.TEBEX_SECRET,
      },
    });
    return response.data;
  }

}
