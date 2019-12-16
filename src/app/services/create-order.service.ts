import { ClientAddress } from './../entities/getAddress/address';
import { Order } from '../entities/createOrder/createOrder';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {

  order =  new Order();
  startingPoint = '';

  constructor() { }

  setAddressA(addressValue: string, lat = '', lon = '') {
    const address = new ClientAddress();
    address.address.name = addressValue;
    address.address.position.lat = parseFloat(lat);
    address.address.position.lon = parseFloat(lon);
    return this.order.params.route.push(address);
  }

  setAddressB(addressValue: string) {
    const address = new ClientAddress();
    address.address.name = addressValue;

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
