import { Controller, Post, Body } from '@nestjs/common';
import { HintService } from './hint.service';
import { CreateHintDto } from './dto/create-hint.dto';

@Controller('api/hint')
export class HintController {
  constructor(private readonly hintService: HintService) {}

  @Post()
  create(@Body() createHint: CreateHintDto) {
    return this.hintService.create(createHint);
  }
}
