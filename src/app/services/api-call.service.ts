import { DriverDetails } from '../entities/driver/driverDetails';
import { Driver } from '../entities/driver/driverDetails';
import { OrderDriverDetails, ResponseOfOrder } from '../entities/driver/getDriver';
import { Order } from '../entities/createOrder/createOrder';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: '5c8c529e-9902-4b72-a886-c1208dcaf0f2'
    })
  };

  driver = new OrderDriverDetails();
  driverInfo = new DriverDetails();

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

  handleError(error: Response | any) {
    console.error(error.message || error);
    return throwError(error.message || error);
  }
}
