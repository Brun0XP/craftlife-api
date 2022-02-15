import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'recovery_request',
  schema: 'site',
})
export class RecoveryRequest {

  @PrimaryColumn({ length: 16 })
  id: string;

  @Column({ length: 16 })
  username: string;

  @Column({ length: 128 })
  email: string;

  @Column({ length: 128 })
  ip: string;

  @Column({ name: 'request_time' })
  requestTime: Date;

  @Column({ name: 'reset_time' })
  resetTime: Date;

}
