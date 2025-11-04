import { IsNotEmpty, IsString, MinLength } from 'class-validator';
/*
DTO - Data Transfer Object
    É um objeto que é usado para transferir dados entre diferentes camadas de uma aplicação.
    É usado para validar os dados de entrada e saída de uma aplicação.
    É usado para serializar e deserializar os dados de uma aplicação.
    É usado para validar os dados de entrada e saída de uma aplicação.
*/

//Como Estamos criando uma DTO de task, nao precisamos do id, pois o id é gerado automaticamente pelo DB e o completed sera atualizado quando a task for completada.

// Esses decorators sao do class-validator e sao usados para validar os dados de entrada. Sao tipo o ZOD.
export class CreateTaskDto {
  @IsString({ message: 'The name must be a string' })
  @MinLength(5, { message: 'The name must be at least 5 characters long' })
  @IsNotEmpty({ message: 'The name is required' })
  readonly name: string;

  @IsString({ message: 'The description must be a string' })
  @MinLength(5, {
    message: 'The description must be at least 5 characters long',
  })
  @IsNotEmpty({ message: 'The description is required' })
  readonly description: string;
}
