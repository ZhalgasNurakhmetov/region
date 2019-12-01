import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const places = [
      {
        id: 1,
        levels: [
          {
            id: 37717755,
            type: 4,
            name: 'Омск',
            prefix: 'г'
          },
          {
            id: 37790473,
            type: 1,
            name: 'Омская',
            prefix: 'обл'
          }
        ],
        priority: 200,
        point: {
          id: 1000000157102,
          info: {
            alias: 'Остановка Ленина пл. ул.Маркса просп (в ст. Торгового центра)'
          },
          coordinates: {
            coordinates: [
              73.380478,
              54.981262
            ],
            type: 'Point'
          }
        }
      },
      {
        id:2,
        levels: [
          {
            id: 37788697,
            type: 7,
            name: 'Ленина',
            prefix: 'ул'
          },
          {
            id: 37717755,
            type: 4,
            name: 'Омск',
            prefix: 'г'
          },
          {
            id: 37790473,
            type: 1,
            name: 'Омская',
            prefix: 'обл'
          }
        ],
        priority: 50
      }
    ];
    return {places};
  }

}
