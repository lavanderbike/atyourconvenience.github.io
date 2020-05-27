import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AppControllerService {
  public address: string;
  public latitude: string;
  public longitude: string;

  constructor(public router: Router) {
    this.address="China";
   }

  public setAddress(newAddress: string) {
    this.address = newAddress;
  }
}
