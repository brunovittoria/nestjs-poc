/*
DTO - Data Transfer Object
    É um objeto que é usado para transferir dados entre diferentes camadas de uma aplicação.
    É usado para validar os dados de entrada e saída de uma aplicação.
    É usado para serializar e deserializar os dados de uma aplicação.
    É usado para validar os dados de entrada e saída de uma aplicação.
*/

//Como Estamos criando uma DTO de task, nao precisamos do id, pois o id é gerado automaticamente pelo DB e o completed sera atualizado quando a task for completada.
export class CreateTaskDto {
  readonly name: string;
  readonly description: string;
}
