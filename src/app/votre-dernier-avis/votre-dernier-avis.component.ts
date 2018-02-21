import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {
  action: string;
  constructor(private collegueService: CollegueService) { }



  ngOnInit() {
    this.action = '<div class="alert alert-dark" role="alert">Aucun Avis pour le moment</div>'
    this.collegueService.collegueAimerObs.subscribe(avis => this.action = '<div class="alert alert-success" role="alert">Vous avez aimé ' + avis.nom + ' ! ');
    this.collegueService.collegueDetesterObs.subscribe(avisNeg => this.action = '<div class="alert alert-danger" role="alert">Vous avez detesté ' + avisNeg.nom + ' ! ');
  }

}
