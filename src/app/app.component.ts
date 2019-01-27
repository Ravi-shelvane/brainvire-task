import { Component , OnInit} from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  users  = [];
  constructor(private serviceDataObj:DataService ) { 
    
  }

  ngOnInit(){
    this.serviceDataObj.getUsers().subscribe(users =>  this.users.push(users) );
    console.log(this.users);
  }
}
