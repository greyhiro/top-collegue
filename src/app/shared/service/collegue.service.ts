import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CollegueService {

  constructor(private http: HttpClient) {

  }

  listerCollegues(): Promise<Collegue[]> {

    return this.http.get('http://localhost:8080/collegues/').toPromise();

  }
  sauvegarder(newCollegue: Collegue): Promise<Collegue> {

    return this.http.post<Collegue>('http://localhost:8080/collegues/creer', newCollegue).toPromise();
    // TODO sauvegarder le nouveau collègue côté serveur
  }

  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {

    return this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.nom, {
      action: 'aimer'
    }).toPromise();


  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.nom, {
      action: 'deteste'
    }).toPromise();
  }
}
