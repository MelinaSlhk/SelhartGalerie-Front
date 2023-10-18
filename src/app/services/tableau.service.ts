import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tableau } from '../models/tableau';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableauService {
  constructor(private http: HttpClient) {}

  getTableaux() {
    return this.http.get<Tableau[]>('http://localhost:3000/api/tableau');
  }

  getTableauById(id: number) {
    return this.http.get<Tableau[]>(`http://localhost:3000/api/tableau/${id}`)
  }

  deleteTableau(tableauId: number): Observable<void> {
    const url = `http://localhost:3000/tableau/${tableauId}`;
    return this.http.delete<void>(url);
  }

  updateTableau(tableauId: number, updateTableau: Tableau): Observable<void> {
    const url = `http://localhost:3000/tableau/${tableauId}`;
    return this.http.put<void>(url, updateTableau);
  }

  createTableau(tableau: Tableau): Observable<Tableau> {
    const url = `http://localhost:3000/tableau`;
    return this.http.post<Tableau>(url, tableau);
}
}