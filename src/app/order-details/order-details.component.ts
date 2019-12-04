import { HttpModService } from '../services/http-mod.service';
import { CreateOrderService } from '../services/create-order.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './order-details.component.html',
  styleUrls: ['../../../node_modules/simple-keyboard/build/css/index.css', './order-details.component.css']
})
export class OrderDetailsComponent {

  keyboard: Keyboard;
  dest = '';
  driver;

  constructor(private createOrder: CreateOrderService, private toApi: HttpModService, private router: Router) { }

  onInputFocus() {
    this.keyboard = new Keyboard({
          onChange: input => this.onChange(input),
          onKeyPress: button => this.onKeyPress(button),
        });
    }

  onChange = (input: string) => {
    this.dest = input;
  }

  onKeyPress = (button: string) => {
  }

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.phone);
  }

  onReturn() {
    return this.dest = '';
  }

  create(): void {
    this.createOrder.setAddress(this.dest);
    this.createOrder.order.params.time = new Date().toISOString();
    this.toApi.createOrder(this.createOrder.order).subscribe(response => this.onSuccess(response));
  }
  onSuccess(result): void {
    this.driver = result;
    this.router.navigate(['/response']);
  }

}
