import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService:ProductService) { }
  products:Product[];
  ngOnInit() {
    this._productService.getProducts().subscribe( response => this.products = response)
  }

}
