import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('myvar') myvar;

  constructor() {
  }

  ngOnInit() {
  }

  show(kanika) {
    console.log(kanika);
  }
}
