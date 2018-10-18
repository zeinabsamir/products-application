import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }
  onCreateProduct(form: NgForm) {
     if (form.invalid) {
         return;
     }

    this.productService.addProducts(form.value.sku, form.value.name,
       form.value.category, form.value.price,
       form.value.image);

    form.resetForm();
  }

}
