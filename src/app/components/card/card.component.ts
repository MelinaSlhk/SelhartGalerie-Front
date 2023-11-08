import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvisDuTableau } from 'src/app/models/avisDuTableau';
import { Tableau } from 'src/app/models/tableau';
import { ImageService } from 'src/app/services/image.service';
import { TableauService } from 'src/app/services/tableau.service';

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
  nouvelAvis = ''; // saisir un nvel avis
  avisList: AvisDuTableau[] = []; // Liste des avis

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private tableauService: TableauService
  ) {}

  ngOnInit() {
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

  ajouterAuxFavoris() {
    // Vous pouvez ici envoyer une requête au backend pour gérer l'ajout/la suppression des favoris
    // Vous devez également mettre à jour le statut "estFavori" en fonction de l'état actuel du tableau
    // Si le tableau est déjà en favori, vous pouvez le supprimer des favoris, sinon, l'ajouter.

    // Pour cette démo, nous allons simplement basculer le statut "estFavori" pour l'exemple.
    this.estFavori = !this.estFavori;
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
        console.log('tableau des avis ds card onInit', this.avisList);
      });
  }
}

