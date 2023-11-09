import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthService } from 'src/app/services/auth.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-page-mon-compte',
  templateUrl: './page-mon-compte.component.html',
  styleUrls: ['./page-mon-compte.component.css'],
})
export class PageMonCompteComponent {
  utilisateurActuelId: number = Number(localStorage.getItem('idUtilisateur'))
  constructor(private authService: AuthService, private router: Router, private utilisateurService: UtilisateurService) {}
  supprimerCompte(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer votre compte ?')) {
      this.utilisateurService.supprimerCompte(id).subscribe(
        {next:(response) => {
          localStorage.clear();
          this.authService.isConnected$.next(null);
          this.router.navigate(['/connexion']);
        },
        error: (error) => {
        console.log('Erreur lors de la suppression du compte.', error);
        }

        })}}}
  // deleteAccount(id): void {
  //   this.http.delete('http://localhost:3000/api/utilisateur').subscribe({
  //     next: (response) => {
  //       console.log('Compte supprimé avec succès.', response);
  //       localStorage.clear();
  //       this.router.navigate(['/connexion']);
  //     },
  //     error: (error) => {
  //       console.log('Erreur lors de la suppression du compte.', error);
  //     },
  //     complete: () => {
  //       console.log('Requête de suppression du compte complétée.');
  //     },
  //   });
  // }




  // updateForm: FormGroup;
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private http: HttpClient,
  //   private utilisateurService: UtilisateurService
  // ) {
  //   let utilisateur: Utilisateur;
  //   this.utilisateurService.getUtilisateur().subscribe((res: Utilisateur) => {
  //     utilisateur = res;
  //   });

  //   this.updateForm = this.formBuilder.group({
  //     nom: ['', Validators.required],
  //     prenom: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     motdepasse: ['', Validators.required],
  //     newmotdepasse: ['', Validators.required],
  //   });
  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
