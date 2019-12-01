import { Order, Params } from './entities/createOrder/createOrder';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {

  order =  new Order();

  constructor() { }

  setAddress(addressValue: string) {
    return this.order.params.route.address.name = addressValue;
  }

  setPhone(phone: string) {
    return this.order.params.phone = phone;
  }

  resetPhone() {
    return this.order.params.phone = '';
  }

  resetAddress() {
    return this.order.params.route.address.name = '';
  }

}
