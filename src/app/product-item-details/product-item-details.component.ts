import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/Products';
import { ProductListService } from '../Services/ProductList/product-list.service';
import { CartService } from '../Services/Cart/cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

  product: Products;
  productId: number = 0;
  quantity: number = 1;

  cart: Cart;

  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private route: ActivatedRoute, private ProductListService: ProductListService, private CartService:CartService) { 
      this.product = {
        id: 0,
        name:  '',
        price: 0,
        url: '',
        description: ''
      }
      this.cart = {
        id: 1,
        name: 'name',
        price: 1,
        url: "url",
        description: "",
        quantity: 1
      }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));

    });
        this.ProductListService.GetProductList().subscribe((res ) => {
      this.product =res.filter(({id}) => id === this.productId)[0];
    });

  }
  onSubmit(quantity: number, product: Products){
    console.log("Form Submission!!!!");
    console.log("Quantity:  " + quantity);
    this.cart = {
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      description: product.description,
      quantity: quantity
    }
    this.CartService.addToCart(this.cart)
  }

}
