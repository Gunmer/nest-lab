import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;
  @PrimaryColumn()
  age: number;
  @Column()
  name: string;
}
