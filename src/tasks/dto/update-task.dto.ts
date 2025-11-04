/*
DTO - Data Transfer Object
    É um objeto que é usado para transferir dados entre diferentes camadas de uma aplicação.
    É usado para validar os dados de entrada e saída de uma aplicação.
    É usado para serializar e deserializar os dados de uma aplicação.
    É usado para validar os dados de entrada e saída de uma aplicação.
*/

//Como Estamos atualizando uma DTO de task as outras propriedades sao opcionais, pois o usuario pode atualizar apenas o nome ou a descricao ou a completada.
export class UpdateTaskDto {
  readonly name?: string;
  readonly description?: string;
  readonly completed?: boolean;
}
