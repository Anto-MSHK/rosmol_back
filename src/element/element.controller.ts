import { Controller, Post } from '@nestjs/common';
import { ElementService } from './element.service';

@Controller('element')
export class ElementController {
  constructor(private readonly elementService: ElementService) {}

  @Post()
  create() {
    // return this.elementService.create();
  }
}
