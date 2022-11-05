import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { EmployeeEvent } from "./employee-event";

@Entity()
export class Event{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => EmployeeEvent, (employeeEvent) => employeeEvent.id)
  employeeEvent: EmployeeEvent[];
}