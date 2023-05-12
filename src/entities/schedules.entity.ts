import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './users.entity';
import { RealEstate } from './realEstate.entity';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'date' })
  date: Date | string;

  @Column({ type: 'date' })
  hour: Date | string;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate)
  realEstate: RealEstate;

  @ManyToOne(() => User, (user) => user)
  user: User;
}
