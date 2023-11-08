import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.css'],
})
export class BarreDeRechercheComponent {
  @Output() inputUtilisateur = new EventEmitter<string>();
  searchTableaux(query: string) {
    this.inputUtilisateur.emit(query);
  }
}
