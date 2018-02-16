import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/Collegue';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  @Input() collegue: Collegue;
  col: Collegue[];
  constructor(private collegueService: CollegueService) { }


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
    this.collegueService.listerCollegues().then(tabCollegues => this.col = tabCollegues)

  }

}
