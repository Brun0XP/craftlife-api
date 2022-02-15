import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

import { ProductContainer } from './product-container.model';
import { ProductFeature } from './product-feature.model';
import {Server} from './server.model';
import {Staff} from './staff.model';

@Entity({
  name: 'server_roles',
  schema: 'site',
})
export class ServerRole {

  @PrimaryColumn({ length: 32 })
  slug: string;

  @PrimaryColumn({ name: 'server', length: 32 })
  serverId: string;

  @Column({ length: 120 })
  name: string;

  @ManyToOne(type => Server, server => server.serverRoles)
  @JoinColumn([{ name: 'server', referencedColumnName: 'slug' }])
  server: Server;

  @OneToMany(type => Staff, staff => staff.serverRole)
  staffs: Staff[];

}
