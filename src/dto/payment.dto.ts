import { IsNotEmpty } from 'class-validator';

export class PaymentDTO {

  @IsNotEmpty()
  productId: number;

  @IsNotEmpty()
  email: string;
  
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  cpf: string;

}