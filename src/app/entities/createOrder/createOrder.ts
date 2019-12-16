import { ClientAddress } from './../getAddress/address';

export class Order {
  method = 'Orders.submit';
  version = '1.0';
  params: Params = new Params();
}

export class Params {
  fareId: number; // = 74000207357925;
  phone: string;
  route: Array<ClientAddress>;
  time: string;

  constructor() {
    this.route = new Array<ClientAddress>();
  }
}
