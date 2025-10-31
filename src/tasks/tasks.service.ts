import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  listAll() {
    return [{ id: 1, task: 'Comprar Pao' }];
  }

  findOne(id: string) {
    return `Buscar tarefa com id ${id}`;
  }

  create(body: any) {
    return body;
  }
}
