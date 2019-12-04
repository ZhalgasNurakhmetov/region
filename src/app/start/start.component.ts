import { Router } from '@angular/router';
import Keyboard from 'simple-keyboard';
import { CreateOrderService } from '../services/create-order.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import numeric from '../numeric';

@Component({
  selector: 'app-start',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './start.component.html',
  styleUrls: ['../../../node_modules/simple-keyboard/build/css/index.css', './start.component.css']
})
export class StartComponent {

  keyboard: Keyboard;
  phone = '+7';

  constructor(private createOrder: CreateOrderService, private router: Router) { }

  onInputFocus() {
    this.keyboard = new Keyboard({
          onChange: input => this.onChange(input),
          onKeyPress: button => this.onKeyPress(button),
          layout: numeric
        });
    }

  onChange = (input: string) => {
    this.phone = input;
  }

  onKeyPress = (button: string) => {
  }

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.phone);
  }

  phoneNumber(): void {
    this.createOrder.setPhone(this.phone);
    this.router.navigate(['/order'])
  }

}
