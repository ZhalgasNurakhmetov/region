import { Router } from '@angular/router';
import { DriverDetails } from './../entities/driver/driverDetails';
import { ApiCallService } from '../services/api-call.service';
import { Component, OnInit } from '@angular/core';
import { CreateOrderService } from '../services/create-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private order: CreateOrderService, private toApi: ApiCallService, private router: Router) { }

  driver: DriverDetails;
  orderID = this.toApi.driver.params.orderId;

  getDriver() {
    this.toApi.getDriver().subscribe(response => {
      try {
        this.driver.firstName = response.result.assignee.firstName;
        this.driver.lastName = response.result.assignee.lastName;
        this.driver.middleName = response.result.assignee.middleName;
        this.driver.callSign = response.result.assignee.callSign;
        this.driver.phone = response.result.assignee.phone;
      } catch (e) {
        setTimeout(() => {
          this.getDriver();
        }, 2000);
      }
    }, error => {
      this.toApi.handleError(error);
    });
  }

  resetOrder() {
    this.order.resetAddress();
    this.order.resetPhone();
    this.router.navigate(['/phone']);
  }

  ngOnInit(): void {
    this.getDriver();
  }
}
