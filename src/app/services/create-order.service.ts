import { Address, ClientAddress } from './../entities/getAddress/address';
import { Order, Params } from '../entities/createOrder/createOrder';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {

  order =  new Order();

  constructor() { }

  setAddress(addressValue: string) {
    let address = new ClientAddress();
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
    return this.order.params.route[0].address.name = '';
  }

}
