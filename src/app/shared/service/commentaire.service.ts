import { Injectable } from '@angular/core';
import { Commentaire } from '../domain/commentaire';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject } from "rxjs/Subject";

@Injectable()
export class CommentaireService {




  constructor(private http: HttpClient) { }

  private connexionSub: Subject<boolean> = new Subject();

  get connexionObs(): Observable<boolean> {
    return this.connexionSub.asObservable();
  }
  ListerCommentaire(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>('http://localhost:8080/commentaire/').do(value => {
      this.connexionSub.next(true);
      return value;
    })
  }
}
