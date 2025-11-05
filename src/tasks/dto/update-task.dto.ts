import { IsBoolean, IsOptional } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';
import { PartialType } from '@nestjs/mapped-types';
/*
DTO - Data Transfer Object
    É um objeto que é usado para transferir dados entre diferentes camadas de uma aplicação.
    É usado para validar os dados de entrada e saída de uma aplicação.
    É usado para serializar e deserializar os dados de uma aplicação.
    É usado para validar os dados de entrada e saída de uma aplicação.
*/

//Como Estamos atualizando uma DTO de task as outras propriedades sao opcionais, pois o usuario pode atualizar apenas o nome ou a descricao ou a completada. E estamos usando o partialType para herdar as propriedades do CreateTaskDto. Isso é muito util para evitar ter que repetir as mesmas propriedades em todas as DTOs. e Adicionamos as validacoes para o completed.
export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsBoolean({ message: 'The completed must be a boolean' })
  @IsOptional({ message: 'The completed is optional' })
  readonly completed?: boolean;
}
