import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'coin',
  schema: 'bungee',
})
export class Coin {

  @PrimaryColumn({ length: 16 })
  username: string;

  @Column()
  balance: number;

}
