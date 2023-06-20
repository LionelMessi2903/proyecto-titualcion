import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = 'http://localhost:3000/api/requests'; // URL de la API para solicitudes

  constructor(private http: HttpClient) { }

  getRequests(): Observable<any[]> {
    // Perform a GET request to the API to retrieve the list of requests
    return this.http.get<any[]>(this.apiUrl);
  }

  createRequest(requestData: any): Observable<any> {
    // Perform a POST request to the API to create a new request
    return this.http.post<any>(this.apiUrl, requestData);
  }

  updateRequest(requestId: string, requestData: any): Observable<any> {
    // Perform a PUT request to the API to update an existing request
    const url = `${this.apiUrl}/${requestId}`;
    return this.http.put<any>(url, requestData);
  }

  deleteRequest(requestId: string): Observable<any> {
    // Perform a DELETE request to the API to delete an existing request
    const url = `${this.apiUrl}/${requestId}`;
    return this.http.delete<any>(url);
  }
}
