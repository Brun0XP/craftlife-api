import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'warps',
  schema: 'skyblockreborn',
})
export class WarpSkyblock {

  @PrimaryColumn({ length: 16 })
  name: string;

  @Column()
  location: string;

}
