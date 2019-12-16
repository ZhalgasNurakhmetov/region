import { HttpModService } from '../services/http-mod.service';
import { CreateOrderService } from '../services/create-order.service';
import { Component, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';
import { Router } from '@angular/router';
import { Tarif } from '../entities/tarif/tarif';

@Component({
  selector: 'app-order-details',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './order-details.component.html',
  styleUrls: ['../../../node_modules/simple-keyboard/build/css/index.css', './order-details.component.css']
})
export class OrderDetailsComponent {

  startPoint = this.createOrder.startingPoint;
  keyboard: Keyboard;
  dest = '';
  tarif: Tarif = new Tarif();

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
    this.keyboard.setInput(event.target.dest);
  }

  onReturn() {
    return this.dest = '';
  }

  create(): void {
    this.createOrder.setAddressB(this.dest);
    console.log(JSON.stringify(this.createOrder.order));
    this.toApi.createOrder(this.createOrder.order).subscribe(response => {
      console.log(JSON.stringify(response));
      this.toApi.driver.params.orderId = response.result;
      this.router.navigate(['/response']);
    }, error => {
      this.toApi.handleErrorObservable(error);
      this.router.navigate(['/welcome']);
    });
  }

  setTarif(id: number) {
    this.tarif.id = id;
  }
}
