import { Injectable } from '@nestjs/common';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Flashcard } from './entities/flashcard.entity';
import { Model } from 'mongoose';

@Injectable()
export class FlashcardService {
  constructor(@InjectModel(Flashcard.name) private readonly flashCard:Model<Flashcard>){}
  async create(data: CreateFlashcardDto) {
    return await this.flashCard.create({
      parentId:data.parentId,
      front:data.front,
      back:data.back})
  }

  async findAll(parentId:string) {
    return await this.flashCard.find({parentId})
  }
}
