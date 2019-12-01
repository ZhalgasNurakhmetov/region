import { ClientAddress } from './../getAddress/address';

export class Order {
  method = 'Orders.submit';
  version = '1.0';
  params: Params = new Params();
}

export class Params {
  fareId = 74000207357925;
  phone: string;
  route: ClientAddress = new ClientAddress();
  time = Date.now();
}
