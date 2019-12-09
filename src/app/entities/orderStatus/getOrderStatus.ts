export class GetOrderStatus {
  method = 'Orders.getStatus';
  version = '1.0';
  params: OrderStatus = new OrderStatus();
}

export class OrderStatus {
  orderId: number;
}

export class CurrentOrderStatus {
  result: StatusIndex = new StatusIndex();
}

export class StatusIndex {
  status: number;
}
