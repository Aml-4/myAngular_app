import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/Products';
import { Cart } from 'src/app/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ProductIncart: Cart[] = [];
  constructor() { }
  addToCart(cart: Cart){
    if(this.isProductExist(cart)){
      this.updateQuantity(cart, cart.quantity);
      alert("The New Quantity " + cart.name + " updated!")
    } else {
      if(cart.quantity > 1){
        this.ProductIncart.push(cart);
        alert(cart.name + " Added To Your Cart");
      } else {
        alert("Please select a quantity!");
      }
    }
  }
  //1- Get All Cart Items
  getAllCartItems(){
    return this.ProductIncart
  }

  //2- Check if Product Exist Or Not
  isProductExist(cart: Cart){
    if(this.ProductIncart.filter(item => item.id === cart.id ).length > 0){
      return true;
    } else {
      return false;
    }
  }
  // 3- Update Quantity Of Product
  updateQuantity(item: Cart, newQuan: number){
    this.ProductIncart.forEach(i =>{
      if(i.id == item.id){
        i.quantity = newQuan;
      }
    })
    return this.totalPrice();
  }

  //4- Calculate the Total Price
  totalPrice(): number {
    let total = 0;
    this.ProductIncart.forEach(p => total += (p.quantity * p.price));
    return total;
  }

  // 5- Delete Cart
  deleteCart(){
    return this.ProductIncart=[];
  }
  removeProduct(cartItem: Cart){
    return this.ProductIncart = this.ProductIncart.filter(item => item.id != cartItem.id);
  }


}
