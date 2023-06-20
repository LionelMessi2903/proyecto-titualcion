// TitlingPersonService

import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TitlingPerson } from '../models/TitlingPerson';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TitlingPersonService {
  private apiUrl = 'http://localhost:3000/api/titling-people';

  constructor(private http: HttpClient) {}

  getAllTitlingPersons(): Observable<TitlingPerson[]> {
    return this.http.get<TitlingPerson[]>(this.apiUrl);
  }

  getTitlingPersonById(personId: string): Observable<TitlingPerson> {
    const url = `${this.apiUrl}/${personId}`;
    return this.http.get<TitlingPerson>(url);
  }

  createTitlingPerson(personData: TitlingPerson): Observable<TitlingPerson> {
    return this.http.post<TitlingPerson>(this.apiUrl, personData);
  }

  updateTitlingPerson(personId: string, personData: TitlingPerson): Observable<TitlingPerson> {
    const url = `${this.apiUrl}/${personId}`;
    return this.http.put<TitlingPerson>(url, personData);
  }

  deleteTitlingPerson(personId: string): Observable<void> {
    const url = `${this.apiUrl}/${personId}`;
    return this.http.delete<void>(url);
  }
}
