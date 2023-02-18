import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { PageService } from './page.service';

@Controller('api/page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Post()
  create(@Body() createPageDto: CreatePageDto) {
    return this.pageService.create(createPageDto);
  }

  @Get('/get/:id')
  get(@Param('id') id: string) {
    return this.pageService.getPageById(id);
  }
}
