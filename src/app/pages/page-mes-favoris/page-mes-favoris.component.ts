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
  allTableaux: Tableau[] = [];
  utilisateur!: Utilisateur;

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit() {
    // Récupérez l'utilisateur actuel depuis le service
    const idUtilisateur = localStorage.getItem('idUtilisateur');
    if (idUtilisateur) {
      this.utilisateurService
        .getUtilisateurById(+idUtilisateur)
        .subscribe((utilisateur) => {
          this.utilisateur = utilisateur;

          // Récupérez la liste des tableaux favoris de l'utilisateur
          this.favoris = this.utilisateur.tableauxFavoris;
        });
    }
  }
  handleSearch(query: string) {
    if (query) {
      // Effectuez la recherche et filtrez les tableaux en fonction de la requête
      this.favoris = this.favoris.filter((tableau) =>
        tableau.nom.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      // Réinitialisez la liste des tableaux filtrés (affichez tous les tableaux)
      this.favoris = this.allTableaux;
    }
  }
}
