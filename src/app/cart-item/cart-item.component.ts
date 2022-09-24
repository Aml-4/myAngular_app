import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
@Input() cartItem: Cart;
  @Output() removeItem: EventEmitter<Cart> = new EventEmitter();
  @Output() updateQuantity: EventEmitter<Cart> = new EventEmitter();
  constructor() { 
    this.cartItem=  {
      id: 1,
      name: "",
      price: 1,
      url: "",
      description: "",
      quantity: 1
    }
  }

  ngOnInit(): void {
  }
  removeProductItem(cartItem: Cart){
    this.removeItem.emit(cartItem)
  }

  updateQuantities(cartItem: Cart, event: any){
    let newQuan = event.target.value;
    let cart: Cart = {
      id: cartItem.id,
      name: cartItem.name,
      price: cartItem.price,
      url: cartItem.url,
      description: cartItem.description,
      quantity: newQuan
    }
    this.updateQuantity.emit(cart)
  }

}
