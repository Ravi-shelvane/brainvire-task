import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './iuser';
import { Post } from './ipost';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  public root:string;

  constructor(private httpObj:HttpClient ) { 
    this.root = 'http://jsonplaceholder.typicode.com';
  }

  getUsers():Observable<User[]>{
    return this.httpObj.get<User[]>(this.root + '/users')
  }

  getPosts():Observable<Post[]>{
    return this.httpObj.get<Post[]>(this.root + '/posts')
  }

  getTags(){
    return [
      {
        "name": "Nick",
        "email": "Nick@demo.com",
        "role": "Agent",
        "tag":"1101-Agent"
      },
      {
        "name": "Vlad",
        "email": "Vlad@demo.com",
        "role": "Agent",
        "tag":"1101-Owner"
      },
      {
        "name": "Nasta",
        "email": "Nasta@demo.com",
        "role": "Agent",
        "tag":"1101-Alter"
      },
      {
        "name": "Kostya",
        "email": "Kostya@demo.com",
        "role": "Agent",
        "tag":"Owner"
      },
      {
        "name": "Andrey",
        "email": "Andrey@demo.com",
        "role": "Agent",
        "tag":"1101-Argento"
      },
      {
        "name": "Altry",
        "email": "Andrey@demo.com",
        "role": "Agent",
        "tag":"1101-Argento"
      }
  
    ];
  }

}
