import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import {ServerRole} from './server-role.model';
import {Server} from './server.model';

@Entity({
  name: 'staff',
  schema: 'site',
})
export class Staff {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'role_slug', length: 32 })
  roleId: string;

  @Column({ name: 'server', length: 32 })
  serverId: string;

  @Column({ length: 16 })
  username: string;

  @Column()
  realname: string;

  @ManyToOne(type => ServerRole, serverRole => serverRole.staffs)
  @JoinColumn([
    { name: 'role_slug', referencedColumnName: 'slug' },
    { name: 'server', referencedColumnName: 'serverId' },
  ])
  serverRole: ServerRole;

}
