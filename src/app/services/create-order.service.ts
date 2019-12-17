import { ClientAddress, GpsPosition } from './../entities/getAddress/address';
import { Order } from '../entities/createOrder/createOrder';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {

  order =  new Order();

  constructor() { }

  setAddress(addressValue: string, lat = 0, lon = 0) {
    const address = new ClientAddress();
    address.address.name = addressValue;
    address.address.position.lat = lat;
    address.address.position.lon = lon;
    return this.order.params.route.push(address);
  }

  setPhone(phone: string) {
    return this.order.params.phone = phone;
  }

  resetPhone() {
    return this.order.params.phone = '';
  }

  resetAddress() {
    return this.order.params.route[1].address.name = '';
  }
}
