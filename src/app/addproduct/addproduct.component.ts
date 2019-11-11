import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myForm: FormGroup;
  constructor(private product: ProductsService) {

  }

  ngOnInit() {
    this.myForm = new FormGroup({

      image: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(10)),
      imageAlt: new FormControl('', Validators.required),
      isAvailable: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false

    console.log('image', form.value.image);
    console.log('Name', form.value.name);
    console.log('Description', form.value.description);
    console.log('imageAlt', form.value.imageAlt);
    console.log('isAvailable', form.value.isAvailable);

    console.log('Price', form.value.price);
    console.log(this.myForm.value);
    if(this.myForm.valid){
    this.product.pushProducts(this.myForm.value);}
    else{
     alert('form error');
    }
  }
}
