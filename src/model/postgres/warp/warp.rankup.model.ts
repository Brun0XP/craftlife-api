import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'warps',
  schema: 'rankup',
})
export class WarpRankup {

  @PrimaryColumn({ length: 16 })
  name: string;

  @Column()
  location: string;

}
