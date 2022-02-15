import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Product } from './product.model';

@Entity({
  name: 'product_container',
  schema: 'site',
})
export class ProductContainer {

  @PrimaryColumn({ length: 32 })
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 128 })
  image: string;

  @Column({ length: 120 })
  color: string;

  @OneToMany(type => Product, product => product.container)
  products: Product[];

}
