import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Hint } from '../../hint/shema/hint.shema';

export type PagesDocument = Page & Document;

@Schema()
export class Page {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  namespace: string;

  @Prop()
  hints: Hint[];
}

export const PageSchema = SchemaFactory.createForClass(Page);
