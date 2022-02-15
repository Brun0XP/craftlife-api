import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'homes',
  schema: 'factions',
})
export class HomeFactions {

  @PrimaryColumn({ length: 16 })
  name: string;

  @Column({name: 'player_owner'})
  playerOwner: string;

  @Column()
  location: string;

}
