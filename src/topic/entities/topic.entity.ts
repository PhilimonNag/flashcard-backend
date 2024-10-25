import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({timestamps:true})
export class Topic {
  @Prop({type:String,required:true})
  name:string
}

export const TopicSchema=SchemaFactory.createForClass(Topic)