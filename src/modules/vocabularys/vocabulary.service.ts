import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { VocabularyDto, VocabularyDtoParamDto } from 'src/dto/vocabulary.dto'
import { Vocabularys } from 'src/entities/vocabularys.entity'
import { Vocabulary } from 'src/models/vocabulary.model'
import { LessThanOrEqual, Raw, Repository } from 'typeorm'
import * as moment from 'moment'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class VocabularyService {
  constructor(
    @InjectRepository(Vocabularys)
    private userRepository: Repository<Vocabularys>,
    private jwtService: JwtService

  ) {}

  getVocabularys(token:string) {
    const decode = this.jwtService.decode(token)
    console.log(decode.sub,"decode");
    return this.userRepository.find({
      where: {
      userId:Number(decode.sub),
      // date: LessThanOrEqual(new Date())
    }
    })
  }

  createVocabulary(vocabularyParams: VocabularyDto[]) {
    return this.userRepository.save(vocabularyParams)
  }

}

