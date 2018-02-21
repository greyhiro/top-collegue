import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from 'app/shared/domain/Collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';
import { VotreDernierAvisComponent } from '../votre-dernier-avis/votre-dernier-avis.component';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {
  // paramètre d'entrée "collegue"
  @Input() collegue: Collegue;
  //  col: Collegue;
  constructor(private collegueService: CollegueService) { }



  // ...
  jaime() {
    this.collegueService.aimerUnCollegue(this.collegue).subscribe(collegue => this.collegue = collegue);

    //VotreDernierAvis.aimer(this.collegue.nom);
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
  }
  jedeteste() {
    this.collegueService.detesterUnCollegue(this.collegue).subscribe(collegue => this.collegue = collegue);
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
  }

  ngOnInit() {
    //  this.collegueService.listerCollegues().then(tabCollegues => this.col = tabCollegues)
  }
}
