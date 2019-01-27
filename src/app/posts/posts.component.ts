import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { LowerCasePipe } from '@angular/common';
import * as $ from 'jquery';// import Jquery here

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit{
  title = 'app';
  posts  = [];
  tagDetails = [];
  tags = [];
  chkArr = [];
  userTags = [];
  display='none'; //default Variable
  
  constructor(private serviceDataObj:DataService ) { 
    
  }

  // event for fetch posts data from data service
  ngOnInit(){
    this.serviceDataObj.getPosts().subscribe(posts =>  this.posts.push(posts) );
    this.tagDetails = this.serviceDataObj.getTags();
    //console.log(this.posts);
  }
  
  // event for show add tags popup
  openModalDialog(event: any){
    this.display='block'; //Set block css for add tags popup
  }

  // event for hide add tags popup
  closeModalDialog(event: any){
    this.display='none'; //set none css after close add tags popup
  }

  // event for fetch matched tags from tagDetails array and render that tags on popup below search input fields
  onChange(event: any) {
    var searchValue = event.target.value;
    if(searchValue != ''){
        var results = $.map( this.tagDetails, function(e,i){
          if(e.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 || e.email.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 || e.tag.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0) return e; 
        });
        this.tags = results;
    }else{
      this.tags = [];
    }
    
  };
  
  // event for checkbox onchange event operations
  onChangeCheckbox(event: any) {
    
    var chkValue = event.target.value;
    var index = this.chkArr.indexOf(chkValue);
    if(index === -1){
      // pushing tag into array
      this.chkArr.push(chkValue);
    }else{
      //removing tag from array
      this.chkArr.splice(index,1);
    }
    console.log(this.chkArr);

  };

  // event for hide add tags popup and render selected tags on post body.
  onSaveTags(event: any){
    this.display='none'; //set none css after close for add tags popup
    this.userTags  = this.chkArr;
  };

}