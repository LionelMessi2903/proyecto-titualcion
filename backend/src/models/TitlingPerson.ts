import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TitlingPerson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // Otras propiedades y relaciones de la entidad TitlingPerson

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
