import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myForm: FormGroup;
  data;
  constructor(private product: ProductsService, private route: ActivatedRoute, private router: Router) {
  }
  productId: any;

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;

    this.myForm = new FormGroup({

      imageUrl: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(10)),
      imageAlt: new FormControl('', Validators.required),
      isAvailable: new FormControl('', Validators.required),
      price: new FormControl('', Validators.pattern('^[0-9]+.[0-9]'))
    });
    if (this.productId) {
      this.product.filterProducts(this.productId).subscribe(response => {
        this.data = response;
        this.myForm.patchValue({
          title: this.data.title,
          description: this.data.description,
          imageUrl: this.data.imageUrl,
          isAvailable: this.data.isAvailable,
          price: this.data.price
        });
      });
    }
  }

  onSubmit(form: FormGroup) {

    // console.log(this.myForm.value);
    if (this.productId) {
      this.product.updateProducts(form.value, this.productId).subscribe(data => {
        alert('Products updated successfully');
        this.router.navigate(['']);
      }
      );
    } else {
      this.product.pushProducts(this.myForm.value).subscribe(data => {
        alert('Products added successfully');
        this.router.navigate(['']);
      });
    }

  }

}
