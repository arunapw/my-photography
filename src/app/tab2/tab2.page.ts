import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  searchTerm: any = '';
  products: any;
  productsCopy: any;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.fetchProducts();
  }
  ionViewDidLoad() {
    this.setFilteredProducts();
  }
  filterProducts(searchTerm){
    return this.productsCopy.filter((product) => product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
  }
  setFilteredProducts(){
    return this.products = this.filterProducts(this.searchTerm);
  }
  getDiscount(product: any) {
    const price = product.price;
    return ((price * 100) / (100 - product.discount)).toFixed(2);
  }
  showProductDetails(product) {
    this.navCtrl.navigateForward('/tabs/tab3',{ state: { product } });
  }


  private fetchProducts() {
    fetch('./assets/json/products.json').then(res => res.json())
      .then(json => {
        this.products = json;
        this.productsCopy = json;
      });
  }
}
