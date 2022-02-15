import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'homes',
  schema: 'rankup',
})
export class HomeRankup {

  @PrimaryColumn({ length: 16 })
  name: string;

  @Column({name: 'player_owner'})
  playerOwner: string;

  @Column()
  location: string;

}
