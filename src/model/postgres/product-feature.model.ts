import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from './product.model';

@Entity({
  name: 'product_feature',
  schema: 'site',
})
export class ProductFeature {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_slug', length: 32 })
  productId: string;

  @Column({ length: 120 })
  icon: string;

  @Column({ name: 'product_container', length: 32 })
  containerId: string;

  @Column({ length: 255 })
  description: string;

  @Column({ name: 'display_order' })
  displayOrder: number;

  @ManyToOne(type => Product, product => product.features)
  @JoinColumn([
    { name: 'product_slug', referencedColumnName: 'slug' },
    { name: 'product_container', referencedColumnName: 'containerId' },
  ])
  product: Product;

}
