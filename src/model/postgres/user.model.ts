import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'authme',
  schema: 'bungee',
})
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  username: string;

  @Column()
  realname: string;

  @Column()
  password: string;

  @Column()
  ip: string;

  @Column()
  lastlogin: number;

  @Column()
  x: number;

  @Column()
  y: number;

  @Column()
  z: number;

  @Column()
  world: string;

  @Column()
  email: string;

  @Column()
  islogged: number;

  @Column()
  hassession: number;

  @Column()
  yaw: number;

  @Column()
  pitch: number;

  @Column()
  regdate: number;

  @Column()
  regip: string;

  @Column()
  token: string;

  @Column()
  totp: string;

}
