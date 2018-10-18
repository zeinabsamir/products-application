import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   imageWidth = 50;
   imageMargin = 2;
  products: Product[] = [];
  constructor(public productService: ProductService ) { }

  ngOnInit() {

    this.products =  this.productService.getProducts();
  }

}
