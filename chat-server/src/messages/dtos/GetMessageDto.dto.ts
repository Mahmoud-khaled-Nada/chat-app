import { IsNotEmpty, IsString } from 'class-validator';

export class GetMessageDto {
  @IsNotEmpty()
  conversationId: number;
  content: string;
}

