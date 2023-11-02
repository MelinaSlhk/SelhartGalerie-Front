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
  tableauId!: number;

  constructor(private tableauService: TableauService) {}

  ngOnInit(): void {
    this.tableauService.getTableaux().subscribe({
      next: (response) => {
        {
          this.tableaux = [...response];
          console.log(this.tableaux);
        }
      },
    });
  }
}
