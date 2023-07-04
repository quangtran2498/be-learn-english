import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class VocabularyDto {

    @IsNotEmpty()
    userId?: number;

    @IsNotEmpty()
    vocabulary?: string;

    @IsNotEmpty()
    mean?: string;
};

export class VocabularyDtoParamDto {
    params:VocabularyDto[]
};


