import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Employee, (employee) => employee.id)
  employee: Employee;
}