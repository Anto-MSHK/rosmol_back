import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';
import { Page } from '../../page/schema/page.shema';
import { Hint } from '../../hint/shema/hint.shema';

export type ElementDocument = Element & Document;

@Schema()
export class Element {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Page' })
  page: Page;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hint' })
  hint: Hint;
}

export const ElementSchema = SchemaFactory.createForClass(Element);
