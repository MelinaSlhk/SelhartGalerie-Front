import { Component, Input } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-blob-bouton',
  templateUrl: './blob-bouton.component.html',
  styleUrls: ['./blob-bouton.component.css']
})
export class BlobBoutonComponent {
  monFichier!: File;
  idImage!: number;

  constructor(
    private imageService: ImageService
  ){}
  
  onChange(e: any) {

    console.log(e.target);
    this.monFichier = e.target.files[0];
    console.log(this.monFichier);
    
    if (this.monFichier) {
      const formData = new FormData();
      formData.append('monFichier', this.monFichier);
      console.log(formData);

      this.imageService.postImage(formData).subscribe((image: Partial<Image>) => {
 
    this.idImage = image.id!

      })
    
      
    }
    
  }
}
