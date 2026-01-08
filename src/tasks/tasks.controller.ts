import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Patch,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getTasks(@Query() paginationDto: PaginationDto) {
    return this.taskService.listAll(paginationDto);
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    // ParseIntPipe é um pipe que transforma o id para um numero, caso nao seja um numero, ele vai retornar um erro 400.
    return this.taskService.findOne(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.delete(id);
  }
}
