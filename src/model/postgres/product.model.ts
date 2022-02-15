import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

import { ProductContainer } from './product-container.model';
import { ProductFeature } from './product-feature.model';

@Entity({
  name: 'product',
  schema: 'site',
})
export class Product {

  @PrimaryColumn({ length: 32 })
  slug: string;

  @PrimaryColumn({ name: 'container', length: 32 })
  containerId: string;

  @Column({ length: 120 })
  name: string;

  @Column()
  price: number;

  @Column()
  package: number;

  @Column({ default: true })
  monthly: boolean;

  @Column({ default: false })
  featured: boolean;

  @ManyToOne(type => ProductContainer, container => container.products)
  @JoinColumn([{ name: 'container', referencedColumnName: 'id' }])
  container: ProductContainer;

  @OneToMany(type => ProductFeature, feature => feature.product)
  features: ProductFeature[];

}
