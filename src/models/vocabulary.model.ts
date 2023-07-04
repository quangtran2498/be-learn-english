export class Vocabulary {
    vocabularyId?: number;
    userId?: number;
    vocabulary?: string;
    mean?: string;
    date?:Date
    constructor({ vocabularyId,userId, vocabulary, mean, date }) {
        if (vocabularyId !== null) this.vocabularyId = vocabularyId;
        if (userId !== null) this.userId = userId;
        if (vocabulary !== null) this.vocabulary = vocabulary;
        if (mean !== null) this.mean = mean;
        if (date !== null) this.date = date;
    }
}