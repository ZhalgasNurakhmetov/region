import { Driver } from '../entities/driver/driverDetails';
import { GetDriverDetails, ParamsDriver, ResponseOfOrder } from '../entities/driver/getDriver';
import { Order } from '../entities/createOrder/createOrder';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpModService {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: '5c8c529e-9902-4b72-a886-c1208dcaf0f2',
      // 'Content-Type': 'application/json'
    })
  };

  driver = new GetDriverDetails();
  driverInfo = new Driver();

  private createOrderUrl = 'https://econom-astana.hivelogin.ru/api/integration/rpc';

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<ResponseOfOrder> {
    console.log(JSON.stringify(order));
    return this.http.post<ResponseOfOrder>(this.createOrderUrl, order, this.httpOptions).pipe(
      map((result) => {
        console.log(result);
        this.driver.params.orderId = result.result;
        return result;
        // return this.http.post<Driver>(this.createOrderUrl, this.driver, this.httpOptions).pipe(
        //   map((res) => {
        //     this.driverInfo.results.assignee.firstName = res.results.assignee.firstName;
        //     this.driverInfo.results.assignee.lastName = res.results.assignee.lastName;
        //     this.driverInfo.results.assignee.middleName = res.results.assignee.middleName;
        //     this.driverInfo.results.assignee.callSign = res.results.assignee.callSign;
        //     this.driverInfo.results.assignee.phone = res.results.assignee.phone;
        //     return res;
        //   })
        // );
    }));
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    // tslint:disable-next-line: deprecation
    return Observable.throw(error.message || error);
  }

}
