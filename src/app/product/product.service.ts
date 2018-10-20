import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  updatedProduct = new Subject<Product[]>();

  startEditing = new Subject<number>();

  private products: Product[] = [
    {
      sku: 'GDN-320',
      name: 'Alice in the wonderland',
      category: 'book',
      price: 34,
      date: new Date(),
      image: 'https://pngimg.com/uploads/book/book_PNG2116.png'
    },
    {
      sku: 'GQW-221',
      name: 'chair',
      category: 'furniture',
      price: 309,
      date: new Date(),
      image:
        'http://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/25892_XXX_v1.tif&wid=2000&cvt=jpeg'
    },
    {
      sku: 'EDF-351',
      name: 'jacket',
      category: 'cloths',
      price: 45,
      date: new Date(),
      image:
        'http://www.buffalosystems.co.uk/wp-content/uploads/2012/06/zoom_apline_jacket_dark_russet-2365x3286.jpg'
    }
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  addProducts(
    sku: string,
    name: string,
    category: string,
    price: number,
    image: string
  ) {
    const product: Product = {
      sku: sku,
      name: name,
      category: category,
      price: price,
      image: image,
      date: new Date()
    };
    this.products.push(product);
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  getProductById(index: number) {
    return this.products[index];
  }

  updateProduct(index: number, newProduct: Product) {
    this.products[index].sku = newProduct.sku;
    this.products[index].name = newProduct.name;
    this.products[index].category = newProduct.category;
    this.products[index].price = newProduct.price;
    this.products[index].image = newProduct.image;
  }
}
