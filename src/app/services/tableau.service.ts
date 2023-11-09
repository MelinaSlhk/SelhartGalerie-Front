import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tableau } from '../models/tableau';
import { Observable } from 'rxjs';
import { DataRetourAvis } from '../models/data-retour-avis';

@Injectable({
  providedIn: 'root',
})
export class TableauService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  private getHttpOptions() {
    const token = localStorage.getItem('accesstoken');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }
  // Ajouter un avis à un tableau
  addAvis(tableauId: number, avis: string): Observable<string> {
    const url = `${this.baseUrl}/avis/${tableauId}`;
    return this.http.post<string>(url, avis, this.getHttpOptions() );
  }

  // Récupérer les avis pour un tableau spécifique
  getAvisForTableau(tableauId: number): Observable<DataRetourAvis> {
    const url = `${this.baseUrl}/avis/tableau/${tableauId}`;
    return this.http.get<DataRetourAvis>(url);
  }

  getTableaux() {
    return this.http.get<Tableau[]>(`${this.baseUrl}/tableau`);
  }

  getTableauById(id: number) {
    return this.http.get<Tableau[]>(`${this.baseUrl}/tableau/${id}`);
  }

  deleteTableau(tableauId: number): Observable<Tableau> {
    const url = `${this.baseUrl}/tableau/${tableauId}`;
    return this.http.delete<Tableau>(url, this.getHttpOptions());
  }

  updateTableau(
    tableauId: number,
    updateTableau: Partial<Tableau>
  ): Observable<Tableau> {
    const url = `${this.baseUrl}/tableau/${tableauId}`;
    return this.http.patch<Tableau>(url, updateTableau, this.getHttpOptions());
  }

  ajouterTableau(tableau: Partial<Tableau>): Observable<Tableau> {
    const url = `${this.baseUrl}/tableau`;
    return this.http.post<Tableau>(url, tableau, this.getHttpOptions());
  }
}