import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { Tableau } from '../models/tableau';


@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  constructor(private http: HttpClient) {}

  getUtilisateur() {
    return this.http.get<Utilisateur>(`http://localhost:3000/api/utilisateur`);
  }

  getTableaux() {
    return this.http.get<Tableau[]>('http://localhost:3000/api/tableaux');
  }
}
