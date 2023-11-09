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
  allTableaux: Tableau[] = [];
  isEditing = false;
  tableauId!: number;

  constructor(private tableauService: TableauService) {}

  ngOnInit(): void {
    this.tableauService.getTableaux().subscribe({
      next: (response) => {
        {
          this.tableaux = [...response];
           this.allTableaux = [...response];
          console.log(this.tableaux);
        }
      },
    });
  }

  handleSearch(query: string) {
    if (query) {
      // Effectuez la recherche et filtrez les tableaux en fonction de la requête
      this.tableaux = this.tableaux.filter((tableau) =>
        tableau.nom.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      // Réinitialisez la liste des tableaux filtrés (affichez tous les tableaux)
      this.tableaux = this.allTableaux;
    }
  }

  modifierTableau() {
    this.isEditing = !this.isEditing;
  }

  tableauEnEdition: any = null; // Pour stocker le tableau en cours d'édition

  // ajouterTableau(tableau: Tableau) {}

  supprimerTableau(id: number) {
    const tableauId = id;

    this.tableauService.deleteTableau(tableauId).subscribe(() => {
      this.tableaux = this.tableaux.filter(
        (tableau) => tableau.id !== tableauId
      );
    });

    return alert('Tableau supprimé');
  }

  confirmerChangements(
    id: number,
    nom: string,
    dimension: string,
    id_image: number
  ) {
    this.isEditing = false;
    this.tableauId = id;
    const updateTableau: Partial<Tableau> = {
      nom: nom,
    };
    this.tableauService
      .updateTableau(this.tableauId, updateTableau)
      .subscribe(() => {
        console.log('Mise à jour effectuée');
      });
  }
}
 
