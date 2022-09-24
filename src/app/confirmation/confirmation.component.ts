import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../Services/Cart/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  name: any = "";
  total: number;

  constructor(route: ActivatedRoute, private cartService: CartService) { 
    route.paramMap.subscribe(params => {
      this.name = params.get("name");
    });

    this.total = cartService.totalPrice();
    cartService.deleteCart();
  }

  ngOnInit(): void {
  }

}
