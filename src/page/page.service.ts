import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Page, PagesDocument } from './schema/page.shema';
import { Model } from 'mongoose';
import { CreatePageDto } from './dto/create-page.dto';
import { CreateHintDto } from '../hint/dto/create-hint.dto';

@Injectable()
export class PageService {
  constructor(
    @InjectModel(Page.name) private pageModel: Model<PagesDocument>,
  ) {}

  async create(pageDto: CreatePageDto) {
    const page = await new this.pageModel(pageDto);
    return page.save();
  }

  async updateHint(hint: CreateHintDto) {
    const updatedPage = {
      $push: { hints: hint },
    };

    await this.pageModel.findByIdAndUpdate({ _id: hint.page }, updatedPage);
  }
  async getPageById(id: string) {
    if (!id) {
      return await this.pageModel.find({});
    } else return await this.pageModel.findById(id);
  }
}
