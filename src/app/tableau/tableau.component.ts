import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/Collegue';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  col: Collegue[];
  filter: string;
  filterPseudo: string;




  constructor(private collegueService: CollegueService) { }


  add(filtreNombre: HTMLInputElement) {

    this.filter = filtreNombre.value;



    return false;


  }


  addPseudo(filtrePseudo: HTMLInputElement) {

    this.filterPseudo = filtrePseudo.value.toUpperCase();

    console.log(this.filterPseudo);
    return false;



  }

  jaime(unCol: Collegue) {

    console.log(unCol.score)

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

    this.filter = "0";
    this.collegueService.listerCollegues().subscribe(tabCollegues => this.col = tabCollegues,
      error => console.log(error));
    this.collegueService.collegueSaveObs.subscribe(newCollegue => this.col.push(newCollegue))

    this.collegueService.collegueAimerObs.subscribe(collegueAjour => this.col = this.col
      .map(coll => coll.nom === collegueAjour.nom ? collegueAjour : coll))


    this.collegueService.collegueDetesterObs.subscribe(collegueAjour => this.col = this.col.map(coll => coll.nom === collegueAjour.nom ? collegueAjour : coll))
  }





}
