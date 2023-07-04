import { Controller, Res, Get, Post, Body,Headers } from '@nestjs/common'
import { ResponseData } from 'src/global/globalClass'
import { ResponseType } from 'src/global/globalType'
import { Vocabulary } from 'src/models/vocabulary.model'
import { VocabularyService } from './vocabulary.service'
import { VocabularyDto, VocabularyDtoParamDto } from 'src/dto/vocabulary.dto'

@Controller("vocabularys")
export class VocabularyController {
    constructor(private readonly vocabularyService: VocabularyService) {} 
    
  @Get()
  getVocabularys(@Headers() headers) {
    const convertHeader = headers.authorization.split(" ")
    const token = convertHeader[1]
    console.log(token,"token");
    return this.vocabularyService.getVocabularys(token)
  }

  @Post()
    createVocabulary(@Body() createVocabularyDto: VocabularyDto[]) {
    return this.vocabularyService.createVocabulary(createVocabularyDto);
    }
}
