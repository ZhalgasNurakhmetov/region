import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GpsPosition } from '../entities/getAddress/address';

declare var google: any;

@Injectable({
  providedIn: 'root'
})

export class GpsPositionService {

  constructor() { }
  
  private geocoder = new google.maps.Geocoder();
 
  geocodeAddress(location: string): Observable<GpsPosition> {
    console.log('Start');
      return new Observable(observer => {
        this.geocoder.geocode({'address': location}, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            console.log('complete');
            observer.next({
              lat: results[0].geometry.location.lat(), 
              lon: results[0].geometry.location.lng()
            });
          } else {
              console.log('Error - ', results, ' & Status - ', status);
          }
          observer.complete();
        });
      })        
}
}
