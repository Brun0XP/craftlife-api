import {Column, Entity, OneToMany, PrimaryColumn} from 'typeorm';
import {PlayerPermission} from './player-permission.model';

@Entity({
  name: 'luckperms_players',
})
export class LuckpermsPlayer {

  @PrimaryColumn()
  uuid: string;

  @Column()
  username: string;

  @Column({name: 'primary_group'})
  primaryGroup: string;

}
