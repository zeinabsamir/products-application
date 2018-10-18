import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onCreateProduct(form: NgForm) {
     if (form.invalid) {
         return;
     }
    const product = {
      SKU: form.value.sku,
      name: form.value.name,
      category: form.value.category,
      price: form.value.price,
      imageUrl: form.value.image

    };
    console.log(product);
  }

}
