import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity({
  name: 'litebans_history',
  schema: 'bungee',
})
export class History {

  @PrimaryColumn()
  id: number;

  @Column('timestamp')
  date: Date;

  @Column()
  name: string;
  
  @Column()
  uuid: string;

  @Column()
  ip: string;

}
