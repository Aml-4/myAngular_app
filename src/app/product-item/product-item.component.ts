import { Component, Input,OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { Products } from '../models/Products';
import { CartService } from '../Services/Cart/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Products;
  cart: Cart;
  quantity: number;

  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private CartService: CartService) { 
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
  this.quantity=1;
}
  ngOnInit(): void {
  }

  onSubmit(quantity: number, product: Products){
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
