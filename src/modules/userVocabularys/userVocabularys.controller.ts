import { Controller, Get } from "@nestjs/common";
import { UserVocabularyService } from "./userVocabularys.service";
UserVocabularyService
@Controller("user-vocabularys")

export class UserVocabularysController {
    constructor(private readonly UserVocabularyService: UserVocabularyService) {} 
    @Get()
    getVocabularys() {
        
    }
}