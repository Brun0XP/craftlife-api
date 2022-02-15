import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity({
  name: 'homes',
  schema: 'skyblockreborn',
})
export class HomeSkyblock {

  @PrimaryColumn({ length: 16 })
  name: string;

  @Column({name: 'player_owner'})
  playerOwner: string;

  @Column()
  location: string;

}
