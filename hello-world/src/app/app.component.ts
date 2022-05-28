import { Component } from '@angular/core';
import {MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Face-Recognition';
  date:Date;
  detect:any;
  constructor(){
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  ToInform(event)
  {
     this.detect=event;
  }
  
  //constructor()
  //{
  //  //setTimeout(() => {
  //  //  
  //  //  this.title="changed title";
  //  //}, 2000);  
  //}

}
