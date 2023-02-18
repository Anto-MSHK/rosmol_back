import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hint, HintDocument } from './shema/hint.shema';
import { Model } from 'mongoose';
import { CreateHintDto } from './dto/create-hint.dto';
import { Page, PagesDocument } from '../page/schema/page.shema';
import { PageService } from '../page/page.service';

@Injectable()
export class HintService {
  constructor(
    @InjectModel(Hint.name) private hintModel: Model<HintDocument>,
    @InjectModel(Page.name) private pageModel: Model<PagesDocument>,
    private readonly pageService: PageService,
  ) {}

  async create(createHint: CreateHintDto) {
    console.log('+++');
    const hint = await new this.hintModel(createHint);
    console.log(hint);
    await this.pageService.updateHint(createHint);
    console.log('+');
    return hint.save();
  }
  async getHintById(id: string) {
    if (!id) {
      return await this.hintModel.find({});
    } else return await this.hintModel.findById(id);
  }
}
