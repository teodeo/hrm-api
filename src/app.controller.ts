import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AppService } from './app.service';
import { User } from "./entity/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<string> {
    return this.appService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.appService.findAll();
  }
}
