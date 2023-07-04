import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { Users } from './entities/users.entity';
import { Vocabularys } from './entities/vocabularys.entity';
import { VocabularyModule } from './modules/vocabularys/vocabulary.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { UserVocabularysModule } from './modules/userVocabularys/userVocabularys.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'learn_english',
      entities: [Users,Vocabularys],
      synchronize: true,
    }),
    ProductModule,UsersModule,VocabularyModule,AuthModule,UserVocabularysModule],
  controllers: [AppController],
  providers: [AppService,JwtService],
})
export class AppModule {}
