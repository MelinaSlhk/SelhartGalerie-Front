import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.css'],
})
export class PageConnexionComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Suppression de l'ancien token
    this.authService.logout();
  }

  connexionForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    motdepasse: ['', Validators.required],
  });

  connexion() {
      console.log(this.connexionForm.value);  
    if (this.connexionForm) { 
            
      let email= this.connexionForm.value.email;
      let motdepasse= this.connexionForm.value.motdepasse;

      this.authService.connexion(email, motdepasse).subscribe({
    next:(response:any) => {
      if(response)  {   //&& response.accessToken) 
       
        localStorage.setItem('accesstoken', response.accessToken);
        localStorage.setItem('prenom', response.utilisateur.prenom);
        // 1 - faire la même chose avec le boolean administrateur
        const isAdmin = response.utilisateur.administrateur ? 'true' : 'false';
        localStorage.setItem('administrateur', isAdmin);
        
        this.router.navigate(['/accueil']);
        // location.reload();
        }
      }
    }) }
      
    }
  }
