import { Params } from './../driver/getDriver';

export class OrderStatus {
  method = 'Orders.getStatus';
  version = '1.0';
  params: Params = new Params();
}

export class CurrentOrderStatus {
  result: StatusIndex = new StatusIndex();
}

export class StatusIndex {
  status: number;
}
