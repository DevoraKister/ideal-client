import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Question } from '../models/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  apiURL: string = 'http://localhost:53790/api/forum';
  constructor(private http: HttpClient) { }

  askQuetion(question:Question){
    return this.http.post(`${this.apiURL}/question`, question);

  }
getForum():Observable<Question[]>{
  return this.http.get<Question[]>(`${this.apiURL}/getAllQuestion`);
}

}
