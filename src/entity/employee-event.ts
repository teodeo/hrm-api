import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Employee } from "./employee.entity";
import { Event } from "./event.entity";

@Entity()
export class EmployeeEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, (event) => event.id)
  event: Event;

  @ManyToOne(() => Employee, (employee) => employee.id)
  employee: Employee;

  @Column()
  from: Date;

  @Column()
  to: Date;
}