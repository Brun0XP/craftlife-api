import {Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'payments',
  schema: 'site',
})
export class Payment {

  @PrimaryColumn()
  id: number;

  @PrimaryColumn({ length: 16 })
  username: string;

  @Column()
  transaction_amount: number;

  @Column()
  package_id: number;

  @Column()
  payment_method_id: string;

  @Column()
  installments: number;

  @Column()
  status: string;

  @Column({
    nullable: true,
  })
  external_reference: string;

}
