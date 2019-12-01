import { HttpModService } from './../http-mod.service';
import { CreateOrderService } from './../create-order.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';

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

  constructor(private createOrder: CreateOrderService, private toApi: HttpModService) { }

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
    this.toApi.createOrder(this.createOrder.order).subscribe(response => this.driver = response);
  }

}
