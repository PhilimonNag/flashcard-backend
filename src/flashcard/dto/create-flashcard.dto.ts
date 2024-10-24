import { IsNotEmpty, IsString } from "class-validator"

export class CreateFlashcardDto {
  @IsNotEmpty()
  @IsString()
  parentId:string
  
  @IsNotEmpty()
  @IsString()
  front:string

  @IsNotEmpty()
  @IsString()
  back:string
}
