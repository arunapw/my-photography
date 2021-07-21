import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  products: any;

  constructor() { }

  ngOnInit() {
    fetch('./assets/json/products.json').then(res => res.json())
    .then(json => {
      this.products = json;
    });
  }
}
