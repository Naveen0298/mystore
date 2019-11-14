import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products;
  cart = 0;
  
  constructor(private productService: ProductsService) {
  }
  getProductsForDisplay(): void {
    this.productService.getproducts().subscribe(data => {
      this.products = data;
    });
  }
  ngOnInit() {
    this.getProductsForDisplay();
  }
  deleted(event) {
    this.getProductsForDisplay();
  }
  added(event) {
    this.cart ++;
    console.log(this.cart);

  }
 
}
