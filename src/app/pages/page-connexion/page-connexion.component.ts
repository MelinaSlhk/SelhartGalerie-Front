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
    const data = {
      email: this.connexionForm.get('email')?.value,
      motdepasse: this.connexionForm.get('motdepasse')?.value,
    };
    this.authService.connexion(data);
  }
}
