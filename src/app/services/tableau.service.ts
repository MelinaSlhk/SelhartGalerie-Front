import { HttpClient } from '@angular/common/http';
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

  // Ajouter un avis à un tableau
  addAvis(tableauId: number, avis: string): Observable<string> {
    const url = `${this.baseUrl}/avis/${tableauId}`;
    return this.http.post<string>(url, { avis });
  }

  // Récupérer les avis pour un tableau spécifique
  getAvisForTableau(tableauId: number): Observable<DataRetourAvis> {
    const url = `${this.baseUrl}/avis/tableau/${tableauId}`;
    return this.http.get<DataRetourAvis>(url);
  }

  getTableaux() {
    return this.http.get<Tableau[]>('http://localhost:3000/api/tableau');
  }

  getTableauById(id: number) {
    return this.http.get<Tableau[]>(`http://localhost:3000/api/tableau/${id}`);
  }

  deleteTableau(tableauId: number): Observable<Tableau> {
    const url = `http://localhost:3000/api/tableau/${tableauId}`;
    return this.http.delete<Tableau>(url);
  }

  updateTableau(
    tableauId: number,
    updateTableau: Partial<Tableau>
  ): Observable<Tableau> {
    const url = `http://localhost:3000/api/tableau/${tableauId}`;
    return this.http.patch<Tableau>(url, updateTableau);
  }

  ajouterTableau(tableau: Partial<Tableau>): Observable<Tableau> {
    const url = `http://localhost:3000/api/tableau`;
    return this.http.post<Tableau>(url, tableau);
  }
}