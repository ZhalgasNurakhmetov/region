import { ApiCallService } from '../services/api-call.service';
import { CreateOrderService } from '../services/create-order.service';
import { Component, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';
import { Router } from '@angular/router';
import { Tarif } from '../entities/tarif/tarif';
import { GpsPosition } from '../entities/getAddress/address';
import { GpsPositionService } from '../services/gps-position.service';
import alphabetic from '../alphabetic';

@Component({
  selector: 'app-order-details',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './order-details.component.html',
  styleUrls: ['../../../node_modules/simple-keyboard/build/css/index.css', './order-details.component.css']
})
export class OrderDetailsComponent {

  startPoint = this.createOrder.order.params.route[0].address.name;
  keyboard: Keyboard;
  dest = '';
  tarif: Tarif = new Tarif();
  location: GpsPosition;

  constructor(private createOrder: CreateOrderService, private toApi: ApiCallService, private router: Router, private position: GpsPositionService) { }

  onInputFocus() {
    this.keyboard = new Keyboard({
          onChange: input => this.onChange(input),
          onKeyPress: button => this.onKeyPress(button),
          layout: alphabetic
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
    this.dest = '';
    this.router.navigate(['/phone']);
  }

  setAddress() {
    this.position.geocodeAddress(this.dest)
    .subscribe((location: GpsPosition) => {
        this.location = location;
        this.createOrder.setAddress(this.dest, location.lat, location.lon);
        this.toApi.createOrder(this.createOrder.order).subscribe(response => {
          this.toApi.driver.params.orderId = response.result;
          this.router.navigate(['/order']);
        }, error => {
          this.toApi.handleError(error);
          this.router.navigate(['/phone']);
        });
      }, error => {
        this.toApi.handleError(error);
        this.router.navigate(['/phone']);
      }
    );
  }

  setTarif(id: number) {
    this.tarif.id = id;
  }
}
