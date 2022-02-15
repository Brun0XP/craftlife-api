import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'warps',
  schema: 'factions',
})
export class WarpFactions {

  @PrimaryColumn({ length: 16 })
  name: string;

  @Column()
  location: string;

}
