import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css'],
})
export class PageInscriptionComponent {
  inscriptionForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.inscriptionForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      email: new FormControl(''),
      motDePasse: new FormControl(''),
      motDePasseConf: new FormControl(''),
    });
  }

  ngOnInit() {
    // alert('coucou');
    // à l initialisation de...
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(5)]],
      motDePasseConf: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  inscription() {
    // alert('coucou');
    if (this.inscriptionForm) {
      const data: Utilisateur = {
        nom: this.inscriptionForm.get('nom')?.value,
        prenom: this.inscriptionForm.get('prenom')?.value,
        email: this.inscriptionForm.get('email')?.value,
        motdepasse: this.inscriptionForm.get('motDePasse')?.value,
        administrateur: false,
      };
      console.log('are you ok ? ', data);
      this.authService.inscription(data).subscribe((response) => {
        console.log('User ajouté!' + response);
        this.router.navigate(['/connexion']);
      });
    } else {
      alert('Formulaire invalide');
    }
  }
}
