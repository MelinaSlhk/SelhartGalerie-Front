import { Component, OnInit } from '@angular/core';
import { Tableau } from 'src/app/models/tableau';
import { TableauService } from 'src/app/services/tableau.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent {
  tableaux: Tableau[] = [];
  isEditing = false;
  // isAdmin = true;

  constructor(private tableauService: TableauService) {}

  ngOnInit(): void {
    this.tableauService.getTableaux().subscribe((data: Tableau[]) => {
      this.tableaux = data;
      console.log(this.tableaux);
      
    });
  }

  modifierTableau(index: number) {
    this.isEditing = !this.isEditing;
  }

  tableauEnEdition: any = null; // Pour stocker le tableau en cours d'édition

  // ajouterTableau(tableau: Tableau) {}

  supprimerTableau(id: number, index: number) {
   const plantId = id;
   const tableauId = id;
   
   this.tableauService.deleteTableau(tableauId).subscribe(() => {
     this.tableaux.splice(index, 1);
   });
    // if (confirm('Êtes-vous sûr de vouloir supprimer ce tableau ?')) {
    //   this.tableaux.splice(index, 1);
    // }
  }

  confirmerChangements(id: number, nom: string, dimension: string, image: string) {
    this.isEditing = false;
    const tableauId = id;
    const updateTableau: Tableau = {
      id: id,
      nom: nom,
      dimension: dimension,
      image: image,
    };
    this.tableauService.updateTableau(tableauId, updateTableau).subscribe(() => {
      console.log('Mise à jour effectuée');

    });

  // modifierTableau(tableau: Tableau) {
  //   this.tableauEnEdition = { ...tableau };
  // }

  }
}



  