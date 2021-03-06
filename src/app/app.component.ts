import { Component, OnInit } from '@angular/core';
import { Collegue } from 'app/shared/domain/Collegue';
import { CollegueService } from 'app/shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  col: Collegue[];
  message: string;
  validation: string;
  button: string;

  // AjoutCollegue :HTMLInputElement
  constructor(private collegueService: CollegueService) {



  }
  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    console.log(pseudo.value)





    var nom = pseudo.value;
    console.log(imageUrl.value)
    var image = imageUrl.value;
    if ((nom != "") && (image != "")) {

      let coleg: Collegue = new Collegue(nom, image, 0);
      this.collegueService.sauvegarder(coleg).subscribe(message => this.message = "Envoie avec succes",
        error => this.message = "Pseudo déjà existant en base de donnée",
        () => console.log("terminé"));
      this.validation = "valid";

      //this.col.push(new Collegue(nom, image, 0))
      //  this.message = "Envoie avec succes"


    }
    else {


      this.message = "Echec de l'envoie"
      this.validation = "err"

    }


    pseudo.value = "";
    imageUrl.value = ""

    // pour récupérer la valeur saisie, utiliser la propriété value
    // exemple => pseudo.value
    // TODO ajouter au tableau un nouveau collègue
    // TODO vider les champs de saisie

    return false; // pour éviter le rechargement de la page
  }


  ngOnInit() {
    this.collegueService.connexionObs.subscribe(boolean => this.button = "",
      error => this.button = "disabled");

  }


}
