import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { from, of, range } from 'rxjs/create';
import { map, filter, switchMap } from 'rxjs/operators';



@Injectable()
export class CollegueService {

  constructor(private http: HttpClient) {

  }

  listerCollegues(): Promise<Collegue[]> {

    return this.http.get<Collegue[]>('http://localhost:8080/collegues/').toPromise();

    //créer un observable

    const observable = Observable.create(observer => {
      setTimeout(() => observer.next(1), 1000)
      setTimeout(() => observer.next(2), 2000)
      setTimeout(() => observer.complete(), 3000)
    })

    //  ecouter un observable et l'utiliser

    observable.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('terminé'))


  }
  sauvegarder(newCollegue: Collegue): Promise<Collegue> {

    return this.http.post<Collegue>('http://localhost:8080/collegues/creer', newCollegue).toPromise();

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
