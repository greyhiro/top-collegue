import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/Collegue';


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  col: Collegue[];

  constructor(private collegueService: CollegueService) { }


  jaime(unCol: Collegue) {

    console.log(unCol.score)
    unCol.score = unCol.score + 10;
    this.collegueService.aimerUnCollegue(unCol).then(collegue => console.log(unCol));
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
  }
  jedeteste(unCol: Collegue) {

    unCol.score = unCol.score - 10;
    this.collegueService.detesterUnCollegue(unCol).then(collegue => console.log(unCol));
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
  }
  ngOnInit() {
    this.collegueService.listerCollegues().then(tabCollegues => this.col = tabCollegues)

  }

}
