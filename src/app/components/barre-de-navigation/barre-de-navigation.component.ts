import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-barre-de-navigation',
  templateUrl: './barre-de-navigation.component.html',
  styleUrls: ['./barre-de-navigation.component.css'],
})
export class BarreDeNavigationComponent {
  afficherDeconnexion!: string|null;
  prenom?: string;
  isAdmin: boolean = false;
  constructor(
    private utilisateurService: UtilisateurService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.prenom = localStorage.getItem('prenom')!;
    // const isAdminValue = localStorage.getItem('administrateur'); 
    // this.isAdmin = isAdminValue === 'true';

    this.authService.isConnected$.subscribe((resp) => {
      this.afficherDeconnexion = resp;
      console.log('afficherDeconnexion',this.afficherDeconnexion);
    })
    this.authService.prenom$.subscribe((resp) => {
      this.prenom = resp!;
    })
    // reçoit le type de l administarteur
    this.authService.isAdmin$.subscribe((resp) => {
      this.isAdmin = resp?.toString() === 'true';
      
    });
  }

  logout() {
    this.authService.logout();
    this.authService.isConnected$.next('');
    this.authService.isAdmin$.next('');
  }
}

