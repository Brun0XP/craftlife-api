import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity({
  name: 'litebans_kicks',
  schema: 'bungee',
})
export class Kick {

  @PrimaryColumn()
  id: number;

  @Column()
  uuid: string;
  
  @Column()
  ip: string;

  @Column()
  reason: string;

  @Column()
  banned_by_uuid: string;

  @Column()
  banned_by_name: string;

  @Column()
  time: number;

  @Column()
  until: number;

  @Column()
  server_scope: string;

  @Column()
  server_origin: string;

  @Column('boolean')
  silent: boolean;

  @Column('boolean')
  ipban: boolean;

  @Column('boolean')
  ipban_wildcard: boolean;

  @Column('boolean')
  active: boolean;

}
