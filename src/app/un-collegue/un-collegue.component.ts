import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from 'app/shared/domain/Collegue';
import { CollegueService } from '../shared/service/collegue.service';

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

    this.collegue.score = this.collegue.score + 10;
    this.collegueService.aimerUnCollegue(this.collegue).then(collegue => console.log(this.collegue));
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
  }
  jedeteste() {

    this.collegue.score = this.collegue.score - 10;
    this.collegueService.detesterUnCollegue(this.collegue).then(collegue => console.log(this.collegue));
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
  }

  ngOnInit() {
    //  this.collegueService.listerCollegues().then(tabCollegues => this.col = tabCollegues)
  }
}
