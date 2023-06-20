import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo_electronico: string;

  @Column()
  contrasena: string;
}
