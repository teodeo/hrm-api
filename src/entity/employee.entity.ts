import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { EmployeeEvent } from "./employee-event";
import { Event } from "./event.entity";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @OneToOne(() => User, (user) => user.id)
  user: User;

  @OneToMany(() => Event, (event) => event.id)
  event: Event[];
}