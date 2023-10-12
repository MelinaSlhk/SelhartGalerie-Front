import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  connexion(data: { email: string; mot_de_passe: string }) {
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
    mot_de_passe: string;
  }) {
    return this.http.post(`http://localhost:8080/api/auth/inscription`, data);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/connexion']);
  }
}