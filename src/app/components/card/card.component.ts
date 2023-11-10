import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisDuTableau } from 'src/app/models/avisDuTableau';
import { Tableau } from 'src/app/models/tableau';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ImageService } from 'src/app/services/image.service';
import { TableauService } from 'src/app/services/tableau.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() tableau!: Tableau;
  tableauBlob!: Blob;
  tableauImage!: any;
  estFavori: boolean = false;
  utilisateur!: Utilisateur;

  nouvelAvis = ''; // saisir un nvel avis
  avisList: AvisDuTableau[] = []; // Liste des avis

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private tableauService: TableauService,
    private utilisateurService: UtilisateurService,
  ) {}

  ngOnInit() {
    const idUtilisateur = localStorage.getItem('idUtilisateur');
    if (idUtilisateur) {
      // Chargez les favoris de l'utilisateur actuel et mettez à jour estFavori en conséquence
      this.utilisateurService
        .getUtilisateurById(+idUtilisateur)
        .subscribe((utilisateur) => {
          this.utilisateur = utilisateur;
          if (this.tableau.id) {
            this.estFavori = this.isDansLesFavoris(
              this.utilisateur.tableauxFavoris,
              this.tableau.id
            );
          }
        });
    }

    if (this.tableau && this.tableau.image) {
      const IdTableau = this.tableau.id_image;
      this.imageService.getImageById(IdTableau!).subscribe({
        next: (data: Blob) => {
          this.tableauBlob = data;
          this.createImageFromBlob(this.tableauBlob);
        },
      });
    }
    // Chargez la liste des avis pour ce tableau
    this.loadAvisList();
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      this.tableauImage = reader.result;
    });
  }

  // Méthode pour vérifier si un tableau est dans les favoris
  isDansLesFavoris(favoris: Tableau[], tableauId: number): boolean {
    // Vous pouvez implémenter cette méthode en vérifiant si le tableau est dans la liste des favoris
    return favoris.some((favori) => favori.id === tableauId);
  }

  // Méthode pour ajouter ou supprimer un tableau des favoris
  ajouterAuxFavoris() {
    const utilisateurId = this.utilisateur.id; // Assurez-vous d'avoir l'ID de l'utilisateur
    const tableauId = this.tableau.id;

    if (this.estFavori) {
      // Le tableau est dans les favoris, supprimez-le
      (this.utilisateur.tableauxFavoris =
        this.utilisateur.tableauxFavoris.filter((t) => t.id !== tableauId)),
        this.utilisateurService
          .updateUtilisateur(this.utilisateur)
          .subscribe(() => {
            this.estFavori = false;
          });
    } else {
      // Le tableau n'est pas dans les favoris, ajoutez-le
      this.utilisateur.tableauxFavoris = [
        ...this.utilisateur.tableauxFavoris,
        this.tableau,
      ];

      this.utilisateurService
        .updateUtilisateur(this.utilisateur)
        .subscribe(() => {
          this.estFavori = true;
          
        });
    }
  }

  // Fonction pour soumettre un nouvel avis
  submitAvis() {
    if (this.nouvelAvis) {
      // Envoyer l'avis au service
      this.tableauService
        .addAvis(this.tableau.id!, this.nouvelAvis)
        .subscribe((response) => {
          // Réinitialiser le champ de saisie de l'avis
          this.nouvelAvis = '';
          // Actualiser la liste des avis!
          this.loadAvisList();
        });
    }
  }

  // Chargez la liste des avis pour le tableau actuel
  loadAvisList() {
    this.tableauService
      .getAvisForTableau(this.tableau.id!)
      .subscribe((data) => {
        this.avisList = data.data;
        this.avisList.sort((a, b) => b.id - a.id);
        console.log('tableau des avis ds card onInit', this.avisList);
      });
  }
}
