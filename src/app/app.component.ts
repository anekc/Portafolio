import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Portafolio';

  ngOnInit(){
    $('.menu-icon').click(function() {
      $('header nav').slideToggle();
  })
  }
}

