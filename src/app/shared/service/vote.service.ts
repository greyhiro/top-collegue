import { Injectable } from '@angular/core';
import { Vote } from '../domain/vote';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject } from "rxjs/Subject";



@Injectable()
export class VoteService {


  constructor(private http: HttpClient) { }



  ListerVote(): Observable<Vote[]> {

    return this.http.get<Vote[]>('http://localhost:8080/vote')

  }


}
