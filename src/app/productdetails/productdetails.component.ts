import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private product: ProductsService) { }
  @Input() item;
  @Output() isDeleted = new EventEmitter();
  @Output() added = new EventEmitter();
  ngOnInit() {
  }
   count=0;
  
  add(){
  this.added.emit('added');
 
  }
  delete(productId) {
    this.product.deleteProducts(productId).subscribe(data => {
      alert("prouct deleted");
      this.isDeleted.emit('deleted');
      console.log(data);
    }
    );
  }
}
