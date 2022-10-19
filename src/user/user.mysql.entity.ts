import { Column, Entity } from "typeorm";

@Entity()
export class User {

  @Column({ default: null })
  name: string;

}