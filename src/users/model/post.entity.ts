import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('details')
export class UserPostEntity {
  @PrimaryColumn()
  no: number;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  name: string;
}
