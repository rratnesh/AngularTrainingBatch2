import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string = 'Welcome'

  active = true;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Welcome';
  }

  changeStyle() {
    this.active = !this.active;
  }
}
