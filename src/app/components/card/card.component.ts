import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tableau } from 'src/app/models/tableau';
import { ImageService } from 'src/app/services/image.service';
import { TableauService } from 'src/app/services/tableau.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() tableau!: Tableau;

  tableauBlob!: Blob;
  tableauImage!: any;
  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    if (this.tableau && this.tableau.image) {
      const IdTableau = this.tableau.id;
      this.imageService.getImageById(IdTableau!).subscribe({
        next: (data: Blob) => {
          this.tableauBlob = data;
          this.createImageFromBlob(this.tableauBlob);
        },
      });
    }
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      this.tableauImage = reader.result;
      console.log(this.tableauImage);
    });
  }
}
