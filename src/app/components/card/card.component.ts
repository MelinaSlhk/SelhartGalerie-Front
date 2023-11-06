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
    // this.loadAvisList(this.tableau.id);
 this.loadAvisList();
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      this.tableauImage = reader.result;
      // console.log(this.tableauImage);
    });
  }
// Fonction pour soumettre un nouvel avis
  submitAvis() {
    if (this.nouvelAvis) {
      // Envoyer l'avis au service
      this.tableauService.addAvis(this.tableau.id!, this.nouvelAvis).subscribe((response) => {
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

