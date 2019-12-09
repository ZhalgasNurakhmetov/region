import { DriverDetails } from './../entities/driver/driverDetails';
import { Driver } from '../entities/driver/driverDetails';
import { GetDriverDetails, ResponseOfOrder } from '../entities/driver/getDriver';
import { Order } from '../entities/createOrder/createOrder';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of , throwError} from 'rxjs';
import { catchError, repeat, retryWhen, map, retry } from 'rxjs/operators';
import { GetOrderStatus, CurrentOrderStatus } from '../entities/orderStatus/getOrderStatus';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class HttpModService {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: '5c8c529e-9902-4b72-a886-c1208dcaf0f2'
    })
  };

  driver = new GetDriverDetails();
  driverInfo = new DriverDetails();
  order = new GetOrderStatus();

  private createOrderUrl = 'https://econom-astana.hivelogin.ru/api/integration/rpc';

  constructor(private http: HttpClient) { }

  createOrder(order: Order) {
    return this.http.post<ResponseOfOrder>(this.createOrderUrl, order, this.httpOptions);
  }

  getDriver(driver: GetDriverDetails) {
    return this.http.post<Driver>(this.createOrderUrl, driver, this.httpOptions);
  }

  getOrderStatus(status: GetOrderStatus) {
    return this.http.post<CurrentOrderStatus>(this.createOrderUrl, status, this.httpOptions);
  }

  handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return throwError(error.message || error);
  }

}
