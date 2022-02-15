import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'economy',
  schema: 'survival',
})
export class MoneySurvival {

  @PrimaryColumn({ length: 16 })
  username: string;

  @Column()
  balance: number;

}
