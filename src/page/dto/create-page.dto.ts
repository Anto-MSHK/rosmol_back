import { CreateHintDto } from '../../hint/dto/create-hint.dto';

export class CreatePageDto {
  name: string;
  namespace: string;
  hints: CreateHintDto[];
}
