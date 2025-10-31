import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getTasks() {
    return this.taskService.listAll();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Post()
  createTask(@Body() body: any) {
    return this.taskService.create(body);
  }
}
