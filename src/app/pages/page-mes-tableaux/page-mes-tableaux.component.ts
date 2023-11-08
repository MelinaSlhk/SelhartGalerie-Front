import { Component } from '@angular/core';
import { Tableau } from 'src/app/models/tableau';
import { TableauService } from 'src/app/services/tableau.service';

@Component({
  selector: 'app-page-mes-tableaux',
  templateUrl: './page-mes-tableaux.component.html',
  styleUrls: ['./page-mes-tableaux.component.css'],
})
export class PageMesTableauxComponent {
  tableaux: Tableau[] = [];
  tableauxFiltres: Tableau[] = [];
  tableauId!: number;

  constructor(private tableauService: TableauService) {}

  ngOnInit(): void {
    this.tableauService.getTableaux().subscribe({
      next: (response) => {
        {
          this.tableaux = [...response];
          this.tableauxFiltres = [...response]; // Initialisez la liste des tableaux filtrés
          console.log(this.tableaux);
        }
      },
    });
  }
  handleSearch(query: string) {
    if (query) {
      // Effectuez la recherche et filtrez les tableaux en fonction de la requête
      this.tableauxFiltres = this.tableaux.filter((tableau) =>
        tableau.nom.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      // Réinitialisez la liste des tableaux filtrés (affichez tous les tableaux)
      this.tableauxFiltres = this.tableaux;
    }
  }
}
