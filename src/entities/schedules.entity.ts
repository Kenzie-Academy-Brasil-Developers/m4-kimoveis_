import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './users.entity';
import RealEstate from './realEstate.entity';

@Entity('schedules')
export default class Schedule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  date: Date;

  @Column()
  hour: Date;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;

  @ManyToOne(() => User)
  user: User;
}
