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
  productId: number;
  name = '';
  image = '';
  sku = '';
  available = '';
  price = '';

  products: Product[] = [];

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  getInfo(e) {
    this.name = e.name;
    this.sku = e.sku;
    this.price = e.price;
    this.image = e.image;
    this.available = e.date;
  }

  onDelete(index) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.productService.deleteProduct(index);
    }
  }

  onEdit(index: number) {
    this.productService.startEditing.next(index);
  }
}
