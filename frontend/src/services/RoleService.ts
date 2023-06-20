import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RoleService {
  private apiUrl = 'http://localhost:3000/api/roles'; // API URL for roles

  constructor(private http: HttpClient) {}

  getRoles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getRoleById(roleId: string): Observable<any> {
    const url = `${this.apiUrl}/${roleId}`;
    return this.http.get<any>(url);
  }

  createRole(roleData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, roleData);
  }

  updateRole(roleId: string, roleData: any): Observable<any> {
    const url = `${this.apiUrl}/${roleId}`;
    return this.http.put<any>(url, roleData);
  }

  deleteRole(roleId: string): Observable<any> {
    const url = `${this.apiUrl}/${roleId}`;
    return this.http.delete<any>(url);
  }
}
