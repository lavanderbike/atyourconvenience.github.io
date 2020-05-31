import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppControllerService {
  public address: string;
  public latitude: number;
  public longitude: number;
  public zoom: number;

  constructor() {
    this.address = 'China';
    this.zoom = 10;
    this.latitude = 52.520008;
    this.longitude = 13.404954;
  }

  public setAddress(newAddress: string) {
    this.address = newAddress;
  }
}
