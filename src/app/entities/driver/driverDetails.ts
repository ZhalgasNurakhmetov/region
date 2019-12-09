export class Driver {
  result: AssignedDriver = new AssignedDriver();
}

export class AssignedDriver {
  assignee: DriverDetails = new DriverDetails();
}

export class DriverDetails {
  firstName: string;
  middleName: string;
  lastName: string;
  callSign: string;
  phone: string;
}
