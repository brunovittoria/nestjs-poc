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

  update(id: string, body) {
    return `Atualizado tarefa com id ${id}, atualizamos o ${body}`;
  }

  delete(id: string) {
    return `Deletada tarefa com id ${id}`;
  }
}
