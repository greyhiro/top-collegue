import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  status: string;
  badgeClass: string;

  constructor(private collegueService: CollegueService) { }

  connection() {
    this.status = "En ligne";
    this.badgeClass = "badge-success"
  }

  deconnection() {
    this.status = "Hors ligne";
    this.badgeClass = "badge-danger"
  }

  ngOnInit() {

    this.collegueService.connexionObs.subscribe(boolean => this.connection(),
      error => this.deconnection());

  }
}
