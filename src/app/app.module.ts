import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { CollegueService } from './shared/service/collegue.service';
import { PrincipalComponent } from './principal/principal.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarousselComponent } from './caroussel/caroussel.component';

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
    CarousselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
