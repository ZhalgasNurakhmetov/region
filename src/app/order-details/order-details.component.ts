import { GetDriverDetails } from './../entities/driver/getDriver';
import { GetOrderStatus } from './../entities/orderStatus/getOrderStatus';
import { HttpModService } from '../services/http-mod.service';
import { CreateOrderService } from '../services/create-order.service';
import { Component, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';
import { Router } from '@angular/router';
import { repeat, retry } from 'rxjs/operators';

@Component({
  selector: 'app-order-details',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './order-details.component.html',
  styleUrls: ['../../../node_modules/simple-keyboard/build/css/index.css', './order-details.component.css']
})
export class OrderDetailsComponent {

  keyboard: Keyboard;
  dest = '';

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
    const dateNow = new Date(2019, 12, 10, 14, 40);
    this.createOrder.order.params.time = dateNow.toISOString();
    this.toApi.createOrder(this.createOrder.order).subscribe(response => {
      this.toApi.driver.params.orderId = response.result;
      this.toApi.getDriver(this.toApi.driver).subscribe(res => {
      this.toApi.driverInfo.firstName = res.result.assignee.firstName;
      this.toApi.driverInfo.lastName = res.result.assignee.lastName;
      this.toApi.driverInfo.middleName = res.result.assignee.middleName;
      this.toApi.driverInfo.callSign = res.result.assignee.callSign;
      this.toApi.driverInfo.phone = res.result.assignee.phone;
      this.router.navigate(['/response']);
    }, error => {
      retry(4);
      this.toApi.handleErrorObservable(error);
      this.router.navigate(['/']);
    });
    },
    err => {
      this.toApi.handleErrorObservable(err);
      this.router.navigate(['/']);
    });
  }

  // statusValue(order: GetOrderStatus): number {
  //   let status = 0;
  //   this.toApi.getOrderStatus(order).subscribe(response => {
  //     status = response.result.status;
  //     if (status !== 2) {
  //       retry();
  //     }
  //   });
  //   return status;
  // }
}
