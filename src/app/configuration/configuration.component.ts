import { CreateOrderService } from './../services/create-order.service';
import { ApiCallService } from './../services/api-call.service';
import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  apiUrl = 'https://econom-astana.hivelogin.ru/api/integration/rpc';
  pointA = 'Silkway';
  fareId = '74000207357925';
  lon = '71.256';
  lat = '51.265';

  constructor(private router: Router, private api: ApiCallService, private point: CreateOrderService) { }

  ngOnInit() {
  }
  
  setConfig() {
    this.api.setApiUrl(this.apiUrl);
    this.point.setAddress(this.pointA, parseFloat(this.lat), parseFloat(this.lon));
    this.point.order.params.fareId = parseInt(this.fareId, 10);
    this.router.navigate(['/phone']);
  }
}
