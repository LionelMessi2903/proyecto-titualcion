import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../models/UserDTO'; // Import UserDTO

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getUserById(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<any>(url);
  }

  createUser(userData: any): Observable<any> {
    // Make a POST request to the API to create a new user
    return this.http.post<any>(this.apiUrl, userData);
  }

  updateUser(userId: string, userData: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<any>(url, userData);
  }

  deleteUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<any>(url);
  }

  loginUser(correo_electronico: string, contrasena: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const credentials = { correo_electronico, contrasena };
    return this.http.post<any>(url, credentials);
  }

  getUserDetails(correo_electronico: string): Observable<any> {
    // Implement the logic to fetch user details by correo_electronico (email)
    // For example:
    const url = `${this.apiUrl}/details?correo_electronico=${correo_electronico}`;
    return this.http.get<any>(url);
  }

  saveUserDetails(user: UserDTO): Observable<any> {
    return this.http.post(this.apiUrl, user); // Removed 'api/users' prefix
  }
}
