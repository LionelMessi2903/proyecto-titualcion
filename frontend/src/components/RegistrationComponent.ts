import { Component } from '@angular/core';
import { UserService } from '../services/UserService';
import { UserDTO } from '../models/UserDTO';

@Component({
  selector: 'app-registration',
  templateUrl: './views/registration.component.html',
  styleUrls: ['../views/css/registration.component.css']
})
export class RegistrationComponent {
  nombre: string;
  apellido: string;
  correo_electronico: string;
  contrasena: string;

  constructor(private userService: UserService) {}

  register(): void {
    const user: UserDTO = {
      nombre: this.nombre,
      apellido: this.apellido,
      correo_electronico: this.correo_electronico,
      contrasena: this.contrasena
    };

    this.userService.saveUserDetails(user)
      .subscribe(
        response => {
          console.log('Registration successful');
          // Perform any further actions or redirect to another page
        },
        error => {
          console.error('Registration failed:', error);
          // Handle the error, display an error message, etc.
        }
      );
  }
}
