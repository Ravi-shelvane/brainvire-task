import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{
  title = 'app';
  users  = [];
  constructor(private serviceDataObj:DataService ) { 
    
  }

  ngOnInit(){
    this.serviceDataObj.getUsers().subscribe(users =>  this.users.push(users) );
    console.log(this.users);
  }
}
