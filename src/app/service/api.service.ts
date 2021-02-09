import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private post:Posted;
  constructor(private httpClient: HttpClient) { }

  async posts(url:string) {
    return await this.httpClient.get(url).toPromise();
  }

  async getPostsForUser(url:string){
    return await this.httpClient.get(url).toPromise();
  }

  async getComments(url){
    return await this.httpClient.get(url).toPromise();
  }

  async getUsers(url:string){
    return await this.httpClient.get(url).toPromise();
  }

}

export interface Posted{
  body:string;
  id:number;
  title:string;
  userId:number;
}
