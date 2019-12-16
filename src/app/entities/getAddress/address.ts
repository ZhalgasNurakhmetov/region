export class ClientAddress {
  address: Address = new Address();
  entrance: string;
  flat: string;
  comment: string;
}

export class Address {
  name: string;
  components: AddressComponent;
  types: AddressTypes;
  position: GpsPosition = new GpsPosition();
}

export class AddressComponent {
  level: AddressLevel;
  name: string;
}

export class AddressTypes {
  pointType: number;
  aliasType: number;
}

export class GpsPosition {
  lat: number;
  lon: number;
}

export class AddressLevel {
  0: 'Страна';
  1: 'Административный уровень 1';
  2: 'Административный уровень 2';
  3: 'Административный уровень 3';
  4: 'Административный уровень 4';
  5: 'Административный уровень 5';
  6: 'Административный уровень 6';
  7: 'Улица';
  8: 'Дом';
  9: 'Быстрый адрес';
}
