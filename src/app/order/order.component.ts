import { HttpModService } from '../services/http-mod.service';
import { Component, OnInit } from '@angular/core';
import { CreateOrderService } from '../services/create-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor(private order: CreateOrderService, private driver: HttpModService) { }

  driverDetail = this.driver.driverInfo;
  orderID = this.driver.driver.params.orderId;

  resetOrder() {
    this.order.resetAddress();
    this.order.resetPhone();
  }
}
