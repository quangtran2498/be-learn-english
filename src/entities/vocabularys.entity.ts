import moment from "moment";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class Vocabularys {
 @PrimaryGeneratedColumn()
 vocabularyId: number;

  @Column()
  userId: number;

  @Column()
  vocabulary: string;

  @Column()
  mean: string;
  
 @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  date:Date

}

