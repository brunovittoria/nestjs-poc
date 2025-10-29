import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return [
      {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        done: false,
      },

      {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        done: false,
      },
      {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        done: false,
      },
    ];
  }

  @Get(':id')
  getTaskById(@Param('id') id: number) {
    return {
      id,
      title: 'Task 1',
      description: 'Description 1',
      done: true,
    };
  }

  @Post('/create-task')
  createTask() {
    return {
      message: 'Task created successfully',
    };
  }
}
