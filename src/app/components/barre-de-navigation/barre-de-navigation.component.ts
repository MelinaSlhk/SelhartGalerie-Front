import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-barre-de-navigation',
  templateUrl: './barre-de-navigation.component.html',
  styleUrls: ['./barre-de-navigation.component.css'],
})
export class BarreDeNavigationComponent {
  prenom?: string;
  isAdmin: boolean = false;
  constructor(
    private utilisateurService: UtilisateurService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.prenom = localStorage.getItem('prenom')!;
    // 2 - même chose avec administrateur du localstorage
    const isAdminValue = localStorage.getItem('administrateur'); 
    this.isAdmin = isAdminValue === 'true';
  }

  logout() {
    this.authService.logout();
  }
}

