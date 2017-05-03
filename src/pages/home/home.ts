import {Component,Input} from '@angular/core';

import {RouterModule,Routes} from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomePage {

  constructor() {
console.log("Hello World!");
  }

  showAlert():void {
  
  }

}