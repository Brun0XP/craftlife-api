import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import {ServerRole} from './server-role.model';

@Entity({
  name: 'server',
  schema: 'site',
})
export class Server {

  @PrimaryColumn({ length: 32 })
  slug: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 120 })
  color: string;

  @Column()
  integration: boolean;

  @OneToMany(type => ServerRole, serverRoles => serverRoles.server)
  serverRoles: ServerRole[];

}
