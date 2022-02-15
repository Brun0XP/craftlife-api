import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'warps',
  schema: 'kitpvp',
})
export class WarpKitPvP {

  @PrimaryColumn({ length: 16 })
  name: string;

  @Column()
  location: string;

}
