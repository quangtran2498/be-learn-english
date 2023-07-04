import { Module } from "@nestjs/common";
import { UserVocabularysController } from "./userVocabularys.controller";
import { UserVocabularyService } from "./userVocabularys.service";

@Module({
    controllers:[UserVocabularysController],
    providers:[UserVocabularyService]
})

export class UserVocabularysModule {}