import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
products;
  constructor(private productService: ProductsService) { 
    this.products = this.productService.getproducts();
  }
    
  
  ngOnInit() {
  }


}
