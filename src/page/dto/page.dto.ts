import { CreateHintDto } from '../../hint/dto/create-hint.dto';

export class PageDto {
  _id: string;
  name: string;
  namespace: string;
  hints: CreateHintDto[];
}
