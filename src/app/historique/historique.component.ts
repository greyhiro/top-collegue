import { Component, OnInit, Input } from '@angular/core';
import { VoteService } from '../shared/service/vote.service';
import { Vote } from '../shared/domain/vote';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  vote: Vote[];
  constructor(private voteService: VoteService) { }

  ngOnInit() {

    this.voteService.ListerVote().subscribe(tabVote => this.vote = tabVote,
      error => console.log(error));
  }



}
