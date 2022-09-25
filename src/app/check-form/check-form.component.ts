import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../Services/Cart/cart.service';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.css']
})
export class CheckFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    creditCard: new FormControl('', [Validators.required, Validators.max(9999999999999999), Validators.min(1000000000000000)])
})
  name: string = "";
  constructor(private cartService: CartService,private router: Router) {
    this.name = this.form.controls['name'].value;
  }
  ngOnInit(): void {
  }
  confirm() {
    if (this.form.invalid) return;
    console.log(this.name)
    this.router.navigateByUrl(`/confirmation/${this.name}`);
    this.form.reset();
  }

}
