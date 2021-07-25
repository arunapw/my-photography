import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{
  product: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(_p => {
      const navParams = this.router.getCurrentNavigation().extras.state;
      if (navParams)
      {
        this.product = navParams.product;
      }
    });
  }
  getDiscount(product: any) {
    const price = product.price;
    return ((price * 100) / (100 - product.discount)).toFixed(2);
  }
  ngOnInit(): void {
  }


}
