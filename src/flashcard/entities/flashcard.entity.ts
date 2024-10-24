import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Types } from "mongoose"

@Schema({timestamps:true})
export class Flashcard {
  @Prop({required:true})
  parentId:Types.ObjectId

  @Prop({required:true})
  front:string

  @Prop({required:true})
  back:string
}

export const FlashcardSchema=SchemaFactory.createForClass(Flashcard);
