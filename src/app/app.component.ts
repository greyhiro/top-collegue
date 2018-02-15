import {Component, OnInit } from '@angular/core';
import {Collegue} from 'app/shared/domain/Collegue'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app';
    col:Collegue[];
    message:string;
  constructor() {

    this.col = [new Collegue('Lola', 'http://www.vivreenaidant.fr/sites/default/files/styles/article_large_618x385/public/articles/images/iStock_000020253972XSmall.jpg', 150),
    new Collegue('Soquette', 'https://avatars1.githubusercontent.com/u/26958482?s=400&u=a2f27dc3f5b125d52ac0fb989820c222dfd9bc26&v=4', 150000000),
    new Collegue('hlol', 'https://avatars2.githubusercontent.com/u/34679615?s=96&v=4', 28951),
    new Collegue('choco', 'https://vignette.wikia.nocookie.net/finalfantasy/images/c/ce/FFLTNS_Chocobo_Alpha_Artwork.jpg/revision/latest/top-crop/width/240/height/240?cb=20160924060307', 25813)
      ];

    }
    add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
      console.log(pseudo.value)
        var error = document.getElementById('error');

        var validation = document.getElementById('validation');


      var nom = pseudo.value;
      console.log(imageUrl.value)
      var image = imageUrl.value;
      if((nom!="")&&(image!=""))
      {
      this.col.push(new Collegue(nom, image, 0))

      this.message = "Envoie avec succes"

      }
      else{


        this.message = "Echec de l'envoie"

      }
      var error = document.getElementById('error');

      var validation = document.getElementById('validation');

      pseudo.value="";
      imageUrl.value=""

    // pour récupérer la valeur saisie, utiliser la propriété value
    // exemple => pseudo.value
    // TODO ajouter au tableau un nouveau collègue
    // TODO vider les champs de saisie

    return false; // pour éviter le rechargement de la page
    }
  ngOnInit() {

  }
}
