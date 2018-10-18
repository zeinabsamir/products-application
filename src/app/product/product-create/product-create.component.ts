import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  @ViewChild('productForm') pform: NgForm;
  subscription: Subscription;
  editMode = false;
  editedProductIndex: number;
  editedProduct: Product;

  constructor(public productService: ProductService) { }

  ngOnInit() {

   this.subscription = this.productService.startEditing.subscribe(
      (index: number) => {
         this.editedProductIndex = index;
         this.editMode = true;
         this.editedProduct = this.productService.getProductById(index);
          this.pform.setValue({
            sku: this.editedProduct.sku,
            name: this.editedProduct.name,
            category: this.editedProduct.category,
            price: this.editedProduct.price,
            image: this.editedProduct.image,

          });
      }
    );

  }
  onSubmitProduct(form: NgForm) {
     if (form.invalid) {
         return;
     }
     if (this.editMode) {

     this.productService.updateProduct(this.editedProductIndex, form.value);
     console.log(form.value);

  } else {
    this.productService.addProducts(form.value.sku, form.value.name,
      form.value.category, form.value.price,
      form.value.image);
  }

    this.editMode = false;
    form.resetForm();
  }


}
