import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Tarefa 1',
      description: ' Descrição da tarefa 1',
      completed: false,
    },
  ];

  async listAll() {
    const allTasks = await this.prisma.task.findMany();
    return allTasks;
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findFirst({
      where: {
        id: id,
      },
    });

    if (task?.name) return task;

    throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
  }

  create(createTaskDto: CreateTaskDto) {
    const newTask = await this.prisma.task.create({
      data: {
        name: createTaskDto.name,
        description: createTaskDto.description,
        completed: false,
      },
    });

    return newTask;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const findTask = await this.prisma.task.findFirst({
        where: {
          id: id,
        },
      });

      if (!findTask) {
        throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
      }

      const updatedTask = await this.prisma.task.update({
        where: { id: id },
        data: updateTaskDto, // Como nao sabemos quais campos serao atualizados ja q sao opcionais, vamos usar o updateTaskDto completo.
      });

      return updatedTask;
    } catch (err) {
      throw new HttpException('Error updating task', HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: number) {
    try {
      const findTask = await this.prisma.task.findFirst({
        where: {
          id: id,
        },
      });

      if (!findTask) {
        throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
      }

      await this.prisma.task.delete({
        where: { id: id },
      });

      return { message: 'Task deleted successfully' };
    } catch (err) {
      throw new HttpException('Error deleting task', HttpStatus.BAD_REQUEST);
    }
  }
}
