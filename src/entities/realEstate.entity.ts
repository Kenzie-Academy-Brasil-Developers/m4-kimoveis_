import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from './addresses.entity';
import { Category } from './categories.entity';
import { Schedule } from './schedules.entity';
import { User } from './users.entity';

@Entity('real_estate')
export class RealEstate {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'boolean', default: false })
  sold: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: 'integer' })
  size: number;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date | string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (category) => category.realEstate)
  category: Category;

  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedule: Schedule;

  @ManyToOne(() => User, (user) => user)
  user: User;
}
