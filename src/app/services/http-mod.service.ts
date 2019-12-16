import { environment } from './../../environments/environment.dev';
import { DriverDetails } from './../entities/driver/driverDetails';
import { Driver } from '../entities/driver/driverDetails';
import { GetDriverDetails, ResponseOfOrder } from '../entities/driver/getDriver';
import { Order } from '../entities/createOrder/createOrder';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { throwError} from 'rxjs';
import { GetOrderStatus, CurrentOrderStatus } from '../entities/orderStatus/getOrderStatus';

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

  private createOrderUrl: string;

  constructor(private http: HttpClient) { }

  setApiUrl(url: string) {
    this.createOrderUrl = url;
  }

  createOrder(order: Order) {
    return this.http.post<ResponseOfOrder>(this.createOrderUrl, order, this.httpOptions);
  }

  getDriver() {
    return this.http.post<Driver>(this.createOrderUrl, this.driver, this.httpOptions);
  }

  getOrderStatus(status: GetOrderStatus) {
    return this.http.post<CurrentOrderStatus>(this.createOrderUrl, status, this.httpOptions);
  }

  handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return throwError(error.message || error);
  }
}
