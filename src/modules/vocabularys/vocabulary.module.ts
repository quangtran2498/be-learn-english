import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vocabularys } from "src/entities/vocabularys.entity";
import { VocabularyController } from "./vocabulary.controller";
import { VocabularyService } from "./vocabulary.service";
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [TypeOrmModule.forFeature([Vocabularys]),JwtModule],
    controllers: [VocabularyController],
    providers:[VocabularyService]
})

export class VocabularyModule {

}