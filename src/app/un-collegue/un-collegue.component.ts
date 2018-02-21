import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from 'app/shared/domain/Collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {
  // paramètre d'entrée "collegue"
  @Input() collegue: Collegue;
  //  col: Collegue;

  //  commentaire = new FormControl();
  monForm: FormGroup;
  button: any;

  constructor(private collegueService: CollegueService, private modalService: NgbModal, private fb: FormBuilder) {

  }


  submit() {

    console.log(this.monForm);

  }



  // ...
  jaime() {
    this.collegueService.aimerUnCollegue(this.collegue).subscribe(collegue => this.collegue = collegue);

    //VotreDernierAvis.aimer(this.collegue.nom);
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
  }
  jedeteste() {
    this.collegueService.detesterUnCollegue(this.collegue).subscribe(collegue => this.collegue = collegue);
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
  }

  open(content) {
    this.modalService.open(content);

  }





  ngOnInit() {


    this.monForm = this.fb.group({
      commentaire: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(255)
      ])),
    });


    if (this.monForm.valid === false) {
      this.button = "disabled";
      console.log(this.monForm.valid);

    }


  }
}
