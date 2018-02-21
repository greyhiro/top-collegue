import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  connexion: string;
  className: string;
  fonctionConnec: any;
  constructor() { }



  connecter() {
    this.connexion = "En Ligne";
    this.className = 'btn-success';
    //  this.fonctionConnec = this.deconnecter();
  }

  deconnecter() {
    this.connexion = "Hors ligne";
    this.className = "btn-danger";
    //  this.fonctionConnec = this.connecter();
  }



  ngOnInit() {
    this.connexion = 'En ligne';
    this.className = 'btn-success';
    //this.fonctionConnec = this.deconnecter();



  }

}
