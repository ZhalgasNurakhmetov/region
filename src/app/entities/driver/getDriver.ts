export class GetDriverDetails {
  method = 'Orders.getAssignee';
  version = '1.0';
  params: ParamsDriver = new ParamsDriver();
}

export class ParamsDriver {
  orderId: number;
}

export class ResponseOfOrder {
  result: number;
}
