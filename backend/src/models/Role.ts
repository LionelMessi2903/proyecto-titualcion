import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  // Otras propiedades y relaciones de la entidad Role

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
