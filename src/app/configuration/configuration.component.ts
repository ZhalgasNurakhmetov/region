import { CreateOrderService } from './../services/create-order.service';
import { HttpModService } from './../services/http-mod.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.defaults';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';

@Component({
  selector: 'app-configuration',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './configuration.component.html',
  styleUrls: ['../../../node_modules/simple-keyboard/build/css/index.css', './configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  apiUrl: string;
  pointA: string;
  env = environment;
  fareId: string;
  lon: string;
  lat: string;
  keyboard: Keyboard;

  urlChosen = false;
  pointChosen = false;
  latChosen = false;
  lonChosen = false;
  idChosen = false;

  constructor(private router: Router, private api: HttpModService, private point: CreateOrderService) { }

  ngOnInit() {
  }
  onInputFocus(id: number) {
    if (id === 1) {
      this.urlChosen = true;
    } else if (id === 2) {
      this.pointChosen = true;
    } else if (id === 3) {
      this.latChosen = true;
    } else if (id === 4) {
      this.lonChosen = true;
    } else if (id === 5) {
      this.idChosen = true;
    }

    this.keyboard = new Keyboard({
          onChange: input => this.onChange(input),
          onKeyPress: button => this.onKeyPress(button),
        });
    }

    onFocusOut(id: number) {
      if (id === 1) {
        this.urlChosen = false;
      } else if (id === 2) {
        this.pointChosen = false;
      } else if (id === 3) {
        this.latChosen = false;
      } else if (id === 4) {
        this.lonChosen = false;
      } else if (id === 5) {
        this.idChosen = false;
      }
    }
    onChange = (input: string) => {
      if (this.urlChosen === true) {
        this.apiUrl = input;
      } else if (this.pointChosen === true) {
        this.pointA = input;
      } else if (this.latChosen === true) {
        this.lat = input;
      } else if (this.lonChosen === true) {
        this.lon = input;
      } else if (this.idChosen === true) {
        this.fareId = input;
      }
      // this.dest = input;
    }

    onKeyPress = (button: string) => {
    }

    onInputChange = (event: any) => {
      this.keyboard.setInput(event.target.apiUrl);
    }

  setParam() {
    this.api.setApiUrl(this.apiUrl);
    this.point.startingPoint = this.pointA;
    this.point.setAddressA(this.pointA, this.lat, this.lon);
    this.point.order.params.fareId = parseInt(this.fareId, 10);
    this.router.navigate(['/welcome']);
  }
}
