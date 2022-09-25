import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/Cart/cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
CartItems: Cart[];
total : number;
  constructor(private CartService: CartService) { 
    this.total = CartService.totalPrice();
    this.CartItems = CartService.getAllCartItems();
  }

  ngOnInit(): void {
    this.CartItems=this.CartService.getAllCartItems();
  }
  removeProduct(cartItem: Cart){
    this.CartItems = this.CartService.removeProduct(cartItem);
    this.total = this.CartService.totalPrice();
    //return this.total;
  }

  updateQuantity(item: Cart) {
    console.log(item)
    let newQuantity = item.quantity;
    this.total = this.CartService.updateQuantity(item, newQuantity);
    
  }
  

}
