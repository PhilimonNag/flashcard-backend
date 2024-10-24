import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Topic } from './entities/topic.entity';
import { Model } from 'mongoose';

@Injectable()
export class TopicService {

  constructor(@InjectModel(Topic.name) private readonly topicModel:Model<Topic>){}
 async create(createTopicDto: CreateTopicDto) {
    return  await this.topicModel.create(createTopicDto);
  }

  async findAll() {
    return await this.topicModel.find() 
  }

  async update(id: string, updateTopicDto: UpdateTopicDto) {
    return await this.topicModel.findByIdAndUpdate(id,updateTopicDto)
  }

  remove(id: string) {
    return this.topicModel.findByIdAndDelete(id)
  }
}
