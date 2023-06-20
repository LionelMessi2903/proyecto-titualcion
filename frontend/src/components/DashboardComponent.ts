import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../views/dashboard.component.html',
  styleUrls: ['../views/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  userDetails: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Obtener los detalles del usuario actual al inicializar el componente
    this.getUserDetails();
  }

  getUserDetails(): void {
    // Obtener los detalles del usuario actual a través del servicio UserService
    // Por ejemplo:
    this.userService.getUserDetails(this.username)
      .subscribe(response => {
        // Manejar la respuesta del backend y asignar los detalles del usuario a la propiedad userDetails
        this.userDetails = response;
      });
  }
}
