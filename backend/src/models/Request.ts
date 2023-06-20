import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // Otras propiedades y relaciones de la entidad Request

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
