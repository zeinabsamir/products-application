import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   imageWidth = 50;
   imageMargin = 2;
  products: Product[] = [
    {SKU: 'GDN-320', name: 'book', category: 'paper', price: 34, date: new Date(),
    imageUrl: 'https://pngimg.com/uploads/book/book_PNG2116.png' },
    {SKU: 'GQW-221', name: 'chair', category: 'wood', price: 309, date: new Date(),
     imageUrl: 'http://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/25892_XXX_v1.tif&wid=2000&cvt=jpeg' },
    {SKU: 'EDF-351', name: 'jacket', category: 'leather', price: 45, date: new Date(),
     imageUrl: 'http://www.buffalosystems.co.uk/wp-content/uploads/2012/06/zoom_apline_jacket_dark_russet-2365x3286.jpg' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
