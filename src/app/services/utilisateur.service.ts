import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { Tableau } from '../models/tableau';
import { Observable } from 'rxjs';
import { UpdateUtilisateur } from '../models/update-utilisateur';


@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
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
  getUtilisateur() {
    return this.http.get<Utilisateur>(`http://localhost:3000/api/utilisateur`);
  }

  getUtilisateurById(id: number) {
    return this.http.get<Utilisateur>(
      `http://localhost:3000/api/utilisateur/${id}`
    );
  }

  getTableaux() {
    return this.http.get<Tableau[]>('http://localhost:3000/api/tableaux');
  }

  // Méthode pour récupérer les tableaux favoris de l'utilisateur
  getFavoris(): Observable<Tableau[]> {
    return this.http.get<Tableau[]>(`${this.baseUrl}/utilisateur/favoris`);
  }

  // Méthode pour mettre à jour mes favoris
  updateUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.patch<Utilisateur>(
      `${this.baseUrl}/utilisateur/${utilisateur.id}`,
      { tableauxFavoris: utilisateur.tableauxFavoris },
      this.getHttpOptions()
    );
  }

  supprimerCompte(id: number) {
    return this.http.delete(`${this.baseUrl}/utilisateur/${id}`, this.getHttpOptions());
  }
}

