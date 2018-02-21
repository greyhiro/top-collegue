import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from "rxjs/Subject";

@Injectable()
export class CollegueService {


  constructor(private http: HttpClient) {

  }
  // this.collegueService.collegueSaveObs.subscribe()

  private collegueSaveSub: Subject<Collegue> = new Subject();

  get collegueSaveObs(): Observable<Collegue> {
    return this.collegueSaveSub.asObservable();
  }

  private collegueDetesterSub: Subject<Collegue> = new Subject();

  get collegueDetesterObs(): Observable<Collegue> {
    return this.collegueDetesterSub.asObservable();
  }

  private collegueAimerSub: Subject<Collegue> = new Subject();

  get collegueAimerObs(): Observable<Collegue> {
    return this.collegueAimerSub.asObservable();
  }
  listerCollegues(): Observable<Collegue[]> {

    return this.http.get<Collegue[]>('http://localhost:8080/collegues/');
  }
  sauvegarder(newCollegue: Collegue): Observable<Collegue> {

    //return this.http.post<Collegue>('http://localhost:8080/collegues/creer', newCollegue);
    return this.http.post<Collegue>('http://localhost:8080/collegues/creer', newCollegue)
      .map(value => {
        this.collegueSaveSub.next(newCollegue);
        return value;
      });
  }


  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {

    return this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.nom, {
      action: 'aimer'
    }).map(unCollegue => {
      this.collegueAimerSub.next(unCollegue);
      return unCollegue
    });


  }
  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    return this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.nom, {
      action: 'deteste'
    }).map(unCollegue => {
      this.collegueDetesterSub.next(unCollegue);
      return unCollegue

    });


  }

}
