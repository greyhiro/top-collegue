import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/Collegue';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  //@Input() collegue: Collegue;
  col: Collegue[] = [];
  constructor(private collegueService: CollegueService) { }


  ngOnInit() {


    this.collegueService.listerCollegues().subscribe(tabCollegues => this.col = tabCollegues,
      error => console.log(error));
    this.collegueService.collegueSaveObs.subscribe(newCollegue => this.col.push(newCollegue))

    this.collegueService.collegueAimerObs.subscribe(collegueAjour => this.col = this.col
      .map(coll => coll.nom === collegueAjour.nom ? collegueAjour : coll))


    this.collegueService.collegueDetesterObs.subscribe(collegueAjour => this.col = this.col.map(coll => coll.nom === collegueAjour.nom ? collegueAjour : coll))
  }

}
