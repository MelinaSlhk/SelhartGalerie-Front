import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Connexion } from '../models/connexion';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  connexion(email: string, motdepasse: string): Observable<Connexion> {
    const body= {email: email, motdepasse: motdepasse}
    // interface ApiResponse {
    //   accessToken: string;
    //   prenom: string;
    //   utilisateur: string;
    // }

    return this.http
      .post<Connexion>(`http://localhost:3000/api/auth/connexion`, body);
      
  }

  inscription(utilisateur: Utilisateur) {
    return this.http.post(
      `http://localhost:3000/api/auth/inscription`,
      utilisateur
    );
  }

  logout() {  //deconnexion
    localStorage.removeItem('accesstoken');
    this.router.navigate(['/connexion']);
  }
}
