import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tableau } from 'src/app/models/tableau';
import { TableauService } from 'src/app/services/tableau.service';

@Component({
  selector: 'app-ajouter-tableau',
  templateUrl: './ajouter-tableau.component.html',
  styleUrls: ['./ajouter-tableau.component.css'],
})
export class AjouterTableauComponent {

  ajouterTableauForm!: FormGroup;

  constructor(
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

  initialForm(){this.ajouterTableauForm = this.formBuilder.group({
  nom: ['', [Validators.required ]],
  dimension: ['', [Validators.required ]],
  image: ['', [Validators.required ]],
 
});}
  

  ajouterTableau() {
    if (this.ajouterTableauForm.valid) {
      const data: Partial<Tableau> = {
        // id: this.ajouterTableauForm.get('id')?.value,
        nom: this.ajouterTableauForm.get('nom')?.value,
        dimension: this.ajouterTableauForm.get('dimension')?.value,
        id_image: Number(this.ajouterTableauForm.get('image')?.value),
      };
      console.log('are you ok ? ', data);
      this.tableauService.ajouterTableau(data).subscribe({
        next: (response) => {
        console.log(data);
        this.router.navigate(['/admin']);
      }});
    } else {
      alert('Formulaire invalide');
    }
  }
  }


