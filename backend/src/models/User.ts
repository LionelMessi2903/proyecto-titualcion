import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nombre' })
  username: string;

  @Column({ name: 'apellido' })
  lastName: string;

  @Column({ name: 'correo_electronico' })
  email: string;

  @Column({ name: 'contrasena' })
  password: string;

  // Other properties and entity relationships of the User entity

  constructor(username: string, lastName: string, email: string, password: string) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
