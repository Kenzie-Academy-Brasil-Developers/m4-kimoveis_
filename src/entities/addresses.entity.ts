import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
export default class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 45 })
  street: string;

  @Column({ type: 'varchar', length: 45 })
  zipdCode: string;

  @Column({ type: 'varchar', length: 7, nullable: true })
  number: string | null | undefined;

  @Column({ type: 'varchar', length: 20 })
  city: string;

  @Column({ type: 'varchar', length: 2 })
  state: string;
}
