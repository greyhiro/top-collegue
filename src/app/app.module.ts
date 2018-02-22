import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { CollegueService } from './shared/service/collegue.service';
import { VoteService } from './shared/service/vote.service';
import { CommentaireService } from './shared/service/commentaire.service';
import { PrincipalComponent } from './principal/principal.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { SearchByPseudoPipe } from './shared/pipe/search-by-pseudo.pipe';
import { TrierParScorePipe } from './shared/pipe/trier-par-score.pipe';
import { TrierParScoreDecPipe } from './shared/pipe/trier-par-score-dec.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';
import { ConnectionComponent } from './connection/connection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HistoriqueComponent } from './historique/historique.component';

const appRoutes: Routes = [
  { path: 'principal', component: PrincipalComponent }, // /page1 affiche le composant Principal
  { path: 'tableau', component: TableauComponent },
  { path: 'caroussel', component: CarousselComponent },

  { path: '**', redirectTo: 'classique' } // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    PrincipalComponent,
    TableauComponent,
    CarousselComponent,
    ScorePipe,
    SearchByPseudoPipe,
    TrierParScorePipe,
    TrierParScoreDecPipe,
    VotreDernierAvisComponent,
    ConnectionComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CollegueService, VoteService, CommentaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
