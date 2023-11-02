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

  deleteTableau(tableauId: number): Observable<Tableau> {
    const url = `http://localhost:3000/api/tableau/${tableauId}`;
    return this.http.delete<Tableau>(url);
  }

  updateTableau(tableauId: number, updateTableau: Partial<Tableau>): Observable<Tableau> {
    const url = `http://localhost:3000/api/tableau/${tableauId}`;
    return this.http.patch<Tableau>(url, updateTableau);
  }

  ajouterTableau(tableau: Partial<Tableau>): Observable<Tableau> {
    const url = `http://localhost:3000/api/tableau`;
    return this.http.post<Tableau>(url, tableau);
}
}