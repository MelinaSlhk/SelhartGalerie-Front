import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image';
import { Tableau } from 'src/app/models/tableau';
import { ImageService } from 'src/app/services/image.service';
import { TableauService } from 'src/app/services/tableau.service';

@Component({
  selector: 'app-ajouter-tableau',
  templateUrl: './ajouter-tableau.component.html',
  styleUrls: ['./ajouter-tableau.component.css'],
})
export class AjouterTableauComponent {
  ajouterTableauForm!: FormGroup;
  tableaux: Tableau[] = [];
  idImage!: number;
  monFichier!: File;
 
  constructor(
    private imageService: ImageService,
    private formBuilder: FormBuilder,
    private tableauService: TableauService,
    private router: Router
  ) {
    this.ajouterTableauForm = new FormGroup({
      nom: new FormControl(''),
      dimension: new FormControl(''),
      image: new FormControl(''),
    });
  }

  ngOnInit() {
    this.initialForm();
    // alert ('coucou');
  }

  initialForm() {
    this.ajouterTableauForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      dimension: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  ajouterTableau() {
    if (this.ajouterTableauForm) {
      const data: Partial<Tableau> = {
        nom: this.ajouterTableauForm.get('nom')?.value,
        dimension: this.ajouterTableauForm.get('dimension')?.value,
        id_image: this.idImage
        
      };
      console.log('are you ok ? ', data);
      this.tableauService.ajouterTableau(data).subscribe({
        next: (response) => {
          console.log(data);
          this.router.navigate(['/admin']);
        },
      });
    } else {
      alert('Formulaire invalide');
    }
  }

  onChange(e: any) {
    this.monFichier = e.target.files[0];
    console.log(this.monFichier);

    if (this.monFichier) {
      const formData = new FormData();
      formData.append('monFichier', this.monFichier);
      console.log(formData);

      this.imageService
        .postImage(formData)
        .subscribe((image: Partial<Image>) => {
          this.idImage = image.id!;
        });
    }
  }
}


