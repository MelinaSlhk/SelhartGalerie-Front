import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageMesTableauxComponent } from './pages/page-mes-tableaux/page-mes-tableaux.component';
import { PageMesFavorisComponent } from './pages/page-mes-favoris/page-mes-favoris.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageMonCompteComponent } from './pages/page-mon-compte/page-mon-compte.component';
import { PageErreur404Component } from './pages/page-erreur404/page-erreur404.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { BarreDeNavigationComponent } from './components/barre-de-navigation/barre-de-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    PageMesTableauxComponent,
    PageMesFavorisComponent,
    PageAdminComponent,
    PageMonCompteComponent,
    PageErreur404Component,
    PageInscriptionComponent,
    PageConnexionComponent,
    BarreDeNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
