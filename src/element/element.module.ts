import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Element, ElementSchema } from './shema/element.shema';
import { ElementService } from './element.service';
import { ElementController } from './element.controller';

@Module({
  providers: [ElementService],
  controllers: [ElementController],
  imports: [
    MongooseModule.forFeature([{ name: Element.name, schema: ElementSchema }]),
  ],
})
export class ElementModule {}
