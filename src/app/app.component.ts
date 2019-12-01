import { Order } from './entities/createOrder/createOrder';
import { Address } from './entities/getAddress/address';
import { HttpModService } from './http-mod.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kiosk';

  // getAd(): void {
  //   this.adSer.getAddress()
  //   .subscribe(data => this.data = data);
  // }
  // add(data: Order): void {
  //   this.adSer.createOrder(data as Order)
  //   .subscribe(d => {
  //     this.results.push(d);
  //   });
  // }
}
