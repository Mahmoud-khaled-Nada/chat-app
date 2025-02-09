import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {

  @IsNotEmpty()
  conversationId: number;
  content: string;
}