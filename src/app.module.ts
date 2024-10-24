import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicModule } from './topic/topic.module';
import { FlashcardModule } from './flashcard/flashcard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env',
    }),
    MongooseModule.forRootAsync(
      {
        imports:[ConfigModule],
        inject:[ConfigService],
        useFactory:async(configService:ConfigService )=>{
        const dbUrl = configService.get<string>('DB_URL');
        // console.log(`Connecting to database: ${dbUrl}`);
        return { uri: dbUrl };
        }
        
        

    }),
    TopicModule,
    FlashcardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
