import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  items = ['Angular4', 'Java8', 'Android'];
  newItem = '';
  ngOnInit() {
  }

  pushItem = function () {
    if (this.newItem !== '') {
      this.items.pushItem(this.newItem);
      this.newItem = '';
    }
  };

}
