import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Connexion } from '../models/connexion';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  connexion(data: Connexion) {
    interface ApiResponse {
      accessToken: string;
    }

    return this.http
      .post<ApiResponse>(`http://localhost:3000/api/auth/connexion`, data)
      .subscribe((res: ApiResponse) => {
        localStorage.setItem('token', res.accessToken);
        this.router.navigate(['/accueil']);
      });
  }

  inscription(data: {
    nom: string;
    prenom: string;
    email: string;
    motdepasse: string;
  }) {
    return this.http.post(
      `http://localhost:3000/api/auth/inscription`,
      data
    );
  }

  logout() {  //deconnexion
    localStorage.removeItem('token');
    this.router.navigate(['/connexion']);
  }
}
