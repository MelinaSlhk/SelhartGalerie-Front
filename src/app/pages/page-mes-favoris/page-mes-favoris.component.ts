import { Component, OnInit } from '@angular/core';
import { Tableau } from 'src/app/models/tableau';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-page-mes-favoris',
  templateUrl: './page-mes-favoris.component.html',
  styleUrls: ['./page-mes-favoris.component.css'],
})
export class PageMesFavorisComponent implements OnInit {
  favoris: Tableau[] = [];
  utilisateur!: Utilisateur;

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit() {
    // Récupérez l'utilisateur actuel depuis le service
    const idUtilisateur = localStorage.getItem('idUtilisateur');
    if (idUtilisateur) {
      this.utilisateurService.getUtilisateurById(+idUtilisateur).subscribe((utilisateur) => {
        this.utilisateur = utilisateur;

        // Récupérez la liste des tableaux favoris de l'utilisateur
        this.favoris = this.utilisateur.tableauxFavoris;
      });
  }
}
}
