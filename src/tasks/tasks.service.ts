import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Tarefa 1',
      description: ' Descrição da tarefa 1',
      completed: false,
    },
  ];

  listAll() {
    return this.tasks;
  }

  findOne(id: string) {
    const task = this.tasks.find((task) => task.id === Number(id));

    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return task;
  }

  create(body: Task) {
    const newId = this.tasks.length + 1;
    const newTask: Task = {
      ...body,
      id: newId,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: string, body: Task) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex < 0) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    const taskItem = this.tasks[taskIndex];

    this.tasks[taskIndex] = {
      ...taskItem,
      ...body,
    };

    return `Task updated successfully ${taskItem.id}`;
  }

  delete(id: string) {
    return `Deletada tarefa com id ${id}`;
  }
}
