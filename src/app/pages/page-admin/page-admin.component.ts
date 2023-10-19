import { Component, OnInit } from '@angular/core';
import { Tableau } from 'src/app/models/tableau';
import { TableauService } from 'src/app/services/tableau.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent {
  tableaux!: Tableau[];
  isEditing = false;
  tableauId!: number;
  // isAdmin = true;

  constructor(private tableauService: TableauService) {}

  ngOnInit(): void {
    this.tableauService.getTableaux().subscribe({
      next: (response)  => {{
      this.tableaux = [...response];
      console.log(this.tableaux);
}}})};
 
  modifierTableau() {
    this.isEditing = !this.isEditing;
  }

  tableauEnEdition: any = null; // Pour stocker le tableau en cours d'édition

  // ajouterTableau(tableau: Tableau) {}

  supprimerTableau(id: number) {
    const tableauId = id;

    this.tableauService.deleteTableau(tableauId).subscribe(() => {
      //  this.tableaux.splice(index, 1);
    });
    // if (confirm('Êtes-vous sûr de vouloir supprimer ce tableau ?')) {
    //   this.tableaux.splice(index, 1);
    // }
  }

  confirmerChangements(
    id: number,
    nom: string,
    dimension: string,
    id_image: number
  ) {
    this.isEditing = false;
    this.tableauId = id;
    const updateTableau: Tableau = {
      nom: nom,
      dimension: dimension,
      id_image: id_image,
    };
    this.tableauService
      .updateTableau(this.tableauId, updateTableau)
      .subscribe(() => {
        console.log('Mise à jour effectuée');
      });

    // modifierTableau(tableau: Tableau) {
    //   this.tableauEnEdition = { ...tableau };
    // }
  }
}
 
