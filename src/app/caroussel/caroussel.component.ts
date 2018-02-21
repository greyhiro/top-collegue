
import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/Collegue';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {
  color: string;
  col: Collegue[];

  constructor(private collegueService: CollegueService) { }


  jaime(unCol: Collegue) {


    this.collegueService.aimerUnCollegue(unCol).subscribe();
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
  }
  jedeteste(unCol: Collegue) {


    this.collegueService.detesterUnCollegue(unCol).subscribe();
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
  }
  ngOnInit() {

    this.collegueService.listerCollegues().subscribe(tabCollegues => this.col = tabCollegues,
      error => console.log(error));
    this.collegueService.collegueSaveObs.subscribe(newCollegue => this.col.push(newCollegue))

    this.collegueService.collegueAimerObs.subscribe(collegueAjour => this.col = this.col
      .map(coll => coll.nom === collegueAjour.nom ? collegueAjour : coll))


    this.collegueService.collegueDetesterObs.subscribe(collegueAjour => this.col = this.col.map(coll => coll.nom === collegueAjour.nom ? collegueAjour : coll))
  }


}
