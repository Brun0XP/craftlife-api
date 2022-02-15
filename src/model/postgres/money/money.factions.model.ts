import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'economy',
  schema: 'factions',
})
export class MoneyFactions {

  @PrimaryColumn({ length: 16 })
  username: string;

  @Column()
  balance: number;

}
