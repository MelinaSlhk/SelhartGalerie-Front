import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageErreur404Component } from './pages/page-erreur404/page-erreur404.component';
import { PageMesTableauxComponent } from './pages/page-mes-tableaux/page-mes-tableaux.component';
import { PageMesFavorisComponent } from './pages/page-mes-favoris/page-mes-favoris.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'connexion', component: PageConnexionComponent }, // peut-etre modifier connexion en login
  { path: 'inscription', component: PageInscriptionComponent }, // peut-etre modifier inscription en register
  { path: 'accueil', component: PageAccueilComponent }, // peut-etre modifier accueil en home
  { path: 'mes-tableaux', component: PageMesTableauxComponent },
  { path: 'mes-favoris', component: PageMesFavorisComponent},
  { path: '**', component: PageErreur404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
