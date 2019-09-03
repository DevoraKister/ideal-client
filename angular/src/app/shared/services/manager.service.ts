import { Injectable } from '@angular/core';
import { } from '@angular/http'
import { from, Observable, observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";


import { JobView } from '../models/jobView';
import { Recomend } from '../models/recomend';
import { Company } from '../models/company';
import { TopicQuestion } from '../models/topicQuestion';
import { Question } from '../models/question';
import { User } from '../models/user';
import { Statistics } from '../models/Statistics';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
 

  apiURL: string = 'http://localhost:53790/api/manager/';
  str: string;
  constructor(private httpClient: HttpClient) {
  }

  getJobToCheck(): Observable<JobView[]> {
    return this.httpClient.get<JobView[]>(this.apiURL+"JobsToCheck" );
  }
  okTheCheck(JobId) {
    return this.httpClient.get(this.apiURL+"OkTheCheck/"+JobId );
  }

  removeCurrentCompany(companyId:number):Observable<Company[]>{
    return this.httpClient.get<Company[]>(this.apiURL +'removeCompany/'+companyId);
  }

  getTopicQuestion():Observable<TopicQuestion[]>{
    return this.httpClient.get<TopicQuestion[]>(this.apiURL +'getTopicQuestion');

  }
  addQuestionfromRav(question):Observable<Question[]>{
    return this.httpClient.post<Question[]>(this.apiURL +'addAnswerfromRav',question);

  }
  deleteJob(JobId){
    return this.httpClient.delete<Question[]>(this.apiURL +'deleteJob',JobId);

  }
  jobsSigned(){
    return this.httpClient.get<JobView[]>(this.apiURL +'getTopicQuestion/');
  }
  listSignedJob():Observable<JobView[]>{
    return this.httpClient.get<JobView[]>(this.apiURL+'jobsSign/');
  }

  userSignedToSpecificJob(jobId):Observable<User[]>{
return this.httpClient.get<User[]>(this.apiURL+'userToSpecificJob/'+jobId);
  }
  getknowledge() {
    return this.httpClient.get<Statistics>(this.apiURL + 'getknowledge/');
  }
}
