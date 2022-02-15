import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'economy',
  schema: 'kitpvp',
})
export class MoneyKitPvP {

  @PrimaryColumn({ length: 16 })
  username: string;

  @Column()
  balance: number;

}
