import { Entity, Column, UpdateDateColumn, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id?: number;

  @Column({ default: null })
  nickname: string;

  @Column({ default: null })
  username: string;

  @Column({ default: null })
  password: string;
}