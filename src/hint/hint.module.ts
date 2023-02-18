import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HintService } from './hint.service';
import { HintController } from './hint.controller';
import { Hint, HintSchema } from './shema/hint.shema';
import { Page, PageSchema } from '../page/schema/page.shema';
import { PageService } from '../page/page.service';

@Module({
  providers: [HintService, PageService],
  controllers: [HintController],
  imports: [
    MongooseModule.forFeature([{ name: Hint.name, schema: HintSchema }]),
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
  ],
})
export class HintModule {}
