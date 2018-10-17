import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {SKU: 'GDN-320', name: 'book', category: 'paper', price: 34, date: new Date(), imageUrl: '' },
    {SKU: 'GQW-221', name: 'chair', category: 'wood', price: 309, date: new Date(), imageUrl: '' },
    {SKU: 'EDF-351', name: 'jacket', category: 'leather', price: 45, date: new Date(), imageUrl: '' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
