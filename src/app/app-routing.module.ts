import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageErreur404Component } from './pages/page-erreur404/page-erreur404.component';
import { PageMesTableauxComponent } from './pages/page-mes-tableaux/page-mes-tableaux.component';
import { PageMesFavorisComponent } from './pages/page-mes-favoris/page-mes-favoris.component';
import { PageMonCompteComponent } from './pages/page-mon-compte/page-mon-compte.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { AjouterTableauComponent } from './pages/ajouter-tableau/ajouter-tableau.component';
import { authGuard } from './guards/auth.guard';
import { utilisateurGuard } from './guards/utilisateur.guard';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'connexion', component: PageConnexionComponent },
  { path: 'inscription', component: PageInscriptionComponent },
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'mes-tableaux', component: PageMesTableauxComponent },
  { path: 'mes-favoris', component: PageMesFavorisComponent, canActivate: [utilisateurGuard] },
  { path: 'mon-compte', component: PageMonCompteComponent, canActivate: [utilisateurGuard] },
  { path: 'admin', component: PageAdminComponent, canActivate: [authGuard] },
  { path: 'ajouter-tableau', component: AjouterTableauComponent, canActivate: [authGuard] },
  { path: '**', component: PageErreur404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
