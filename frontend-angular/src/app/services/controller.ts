import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppControllerService {
  public address: string;
  public latitude: string;
  public longitude: string;

  constructor() {
    this.address = 'China';
  }

  public setAddress(newAddress: string) {
    this.address = newAddress;
  }
}
