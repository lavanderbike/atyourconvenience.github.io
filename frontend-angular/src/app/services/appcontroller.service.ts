import { Injectable } from '@angular/core';
import { IMap, ILocation } from '../services/ilocation';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AppControllerService {
  public map: IMap;
  private userLocation: ILocation;

  constructor() {
    let defaultLocation: ILocation = {
      latitude: 43.65107,
      longitude: -79.347015,
      address: 'Toronto, ON',
      city: 'Toronto',
      country: 'Canada',
    };

    this.userLocation = defaultLocation;
    this.map = this.getMapWithStorePoints(this.userLocation);

    console.log(JSON.stringify(this.map.userLocation));
  }

  public getuserLocation(): ILocation {
    return this.userLocation;
  }

  public updateuserLocation(location: ILocation) {
    // Validate location

    // Set current location
    this.userLocation = { ...location, ...this.userLocation };
  }

  public getMapWithStorePoints(location: ILocation): IMap {
    let storePoints: ILocation[] = [
      {
        latitude: 43.639322,
        longitude: -79.38216,
        address: 'Harbourfront Centre',
        city: 'Toronto',
        country: 'Canada',
      },
      {
        latitude: 43.641146,
        longitude: -79.378511,
        address: 'RBC WaterPark Place',
        city: 'Toronto',
        country: 'Canada',
      },
      {
        latitude: 43.642629,
        longitude: -79.380941,
        address: 'Toronto, ON',
        city: 'Toronto',
        country: 'Canada',
      },
    ];

    let map: IMap = {
      userLocation: location,
      storePoints: storePoints,
    };

    return map;
  }
}
