import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./entity/user.entity";
import { DataSource } from "typeorm";
import { Employee } from "./entity/employee.entity";
import { EmployeeEvent } from "./entity/employee-event";
import { Event } from "./entity/event.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 49153,
      username: 'postgres',
      password: 'zxcxz',
      database: 'postgres',
      entities: [User, Employee, EmployeeEvent, Event],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Employee, EmployeeEvent, Event])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
