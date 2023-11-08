import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tableau } from '../models/tableau';
import { Favoris } from '../models/favoris';

@Injectable({
  providedIn: 'root',
})
export class FavorisService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  ajouterAuFavoris(
    tableauId: number,
    utilisateurId: number
  ): Observable<Favoris> {
    const body = { tableauId, utilisateurId };
    return this.http.post<Favoris>(
      `${this.baseUrl}/utilisateur/tableau/favoris/${utilisateurId}`,
      body
    );
  }

  supprimerDesFavoris(tableauId: number, utilisateurId: number): Observable<Favoris> {
    const body = { tableauId, utilisateurId };
    return this.http.delete<Favoris>(
      `${this.baseUrl}/utilisateur/tableau/favoris/${utilisateurId}`
    );
  }
}
