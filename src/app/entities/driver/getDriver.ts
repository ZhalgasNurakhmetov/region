export class GetDriverDetails {
  method = 'Orders.getAssignee';
  version = '1.0';
  params: Params = new Params();
}

export class Params {
  orderId: number;
}

export class ResponseOfOrder {
  result: number;
}
