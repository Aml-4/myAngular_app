import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../Services/ProductList/product-list.service';
import { Products } from '../models/Products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductList: Products[] =[];
  constructor(private ProductListService: ProductListService) { }
  ngOnInit(): void {
    this.ProductListService.GetProductList().subscribe(data => {
      this.ProductList = data;
    });
  }
  };

