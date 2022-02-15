import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {LuckpermsPlayer} from './luckperms-player.model';

@Entity({
  name: 'luckperms_user_permissions',
})
export class PlayerPermission {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  permission: string;

  @Column()
  expiry: Date;

}
