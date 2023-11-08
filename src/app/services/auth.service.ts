import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Connexion } from '../models/connexion';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public prenom$ = new BehaviorSubject(localStorage.getItem('prenom'));
  public isConnected$ = new BehaviorSubject(
    localStorage.getItem('accesstoken')
  );
  public isAdmin$ = new BehaviorSubject(localStorage.getItem('administrateur'));

  constructor(private http: HttpClient, private router: Router) {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   this.isConnected$ = new BehaviorSubject(true);
    // } else {
    //   this.isConnected$ = new BehaviorSubject(false);
    // }
  }

  connexion(email: string, motdepasse: string): Observable<Connexion> {
    const body = { email: email, motdepasse: motdepasse };

    return this.http.post<Connexion>(
      `http://localhost:3000/api/auth/connexion`,
      body
    );
  }

  inscription(utilisateur: Partial<Utilisateur>) {
    return this.http.post(
      `http://localhost:3000/api/auth/inscription`,
      utilisateur
    );
  }

  logout() {
    //deconnexion
    localStorage.removeItem('accesstoken');
    this.router.navigate(['/connexion']);
  }
}
