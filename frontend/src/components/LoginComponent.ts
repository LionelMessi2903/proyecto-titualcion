import { Component } from '@angular/core';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: '../views/login.component.html',
  styleUrls: ['../views/css/login.component.css']
})
export class LoginComponent {
  correo_electronico: string;
  contrasena: string;

  constructor(private userService: UserService) { }

  login(): void {
    // Aquí puedes realizar la lógica de inicio de sesión
    // Utiliza los valores de username y password
    // para enviar la solicitud al backend a través del servicio UserService
    // Por ejemplo:
    this.userService.loginUser(this.correo_electronico, this.contrasena)
      .subscribe(response => {
        // Maneja la respuesta del backend
        console.log(response);
      });
  }
}
