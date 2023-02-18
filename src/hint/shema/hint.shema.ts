import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';
import { Page } from '../../page/schema/page.shema';

export type HintDocument = Hint & Document;

@Schema()
export class Hint {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Page' })
  page: Page;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  blockName: string;

  @Prop({ required: true })
  namespace: string;
}

export const HintSchema = SchemaFactory.createForClass(Hint);
