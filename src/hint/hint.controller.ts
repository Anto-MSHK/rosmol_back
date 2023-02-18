import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { HintService } from './hint.service';
import { CreateHintDto } from './dto/create-hint.dto';

@Controller('api/hint')
export class HintController {
  constructor(private readonly hintService: HintService) {}

  @Get('/get/:id')
  get(@Param('id') id: string) {
    return this.hintService.getHintById(id);
  }

  @Post()
  create(@Body() createHint: CreateHintDto) {
    return this.hintService.create(createHint);
  }
}
