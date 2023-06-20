import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitlingPersonService {
  private apiUrl = 'http://localhost:3000/api/titling-people'; // URL de la API para personas tituladas

  constructor(private http: HttpClient) { }

  getAllTitlingPersons(): Observable<any> {
    // Realizar una solicitud GET a la API para obtener todas las personas tituladas
    return this.http.get<any>(this.apiUrl);
  }

  getTitlingPersonById(personId: string): Observable<any> {
    // Realizar una solicitud GET a la API para obtener una persona titulada por su ID
    const url = `${this.apiUrl}/${personId}`;
    return this.http.get<any>(url);
  }

  createTitlingPerson(personData: any): Observable<any> {
    // Realizar una solicitud POST a la API para crear una nueva persona titulada
    return this.http.post<any>(this.apiUrl, personData);
  }

  updateTitlingPerson(personId: string, personData: any): Observable<any> {
    // Realizar una solicitud PUT a la API para actualizar una persona titulada existente
    const url = `${this.apiUrl}/${personId}`;
    return this.http.put<any>(url, personData);
  }

  deleteTitlingPerson(personId: string): Observable<any> {
    // Realizar una solicitud DELETE a la API para eliminar una persona titulada existente
    const url = `${this.apiUrl}/${personId}`;
    return this.http.delete<any>(url);
  }
}
