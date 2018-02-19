import { Component, OnInit } from '@angular/core';
import { Collegue } from 'app/shared/domain/Collegue';
import { CollegueService } from 'app/shared/service/collegue.service';



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
  constructor(private collegueService: CollegueService) {

    //this.col = [new Collegue('Lola', 'http://www.vivreenaidant.fr/sites/default/files/styles/article_large_618x385/public/articles/images/iStock_000020253972XSmall.jpg', 150)]

  }
  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    console.log(pseudo.value)





    var nom = pseudo.value;
    console.log(imageUrl.value)
    var image = imageUrl.value;
    if ((nom != "") && (image != "")) {

      let coleg: Collegue = new Collegue(nom, image, 0);
      this.collegueService.sauvegarder(coleg).then(message => this.message = "Envoie avec succes");
      this.validation = "valid"
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


  }


}
