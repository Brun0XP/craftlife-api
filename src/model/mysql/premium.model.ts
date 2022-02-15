import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'premium',
})
export class Premium {

  @PrimaryGeneratedColumn()
  userid: number;

  @Column()
  name: string;

  @Column()
  premium: boolean;

  @Column()
  lastip: string;

  @Column()
  lastlogin: Date;

}
