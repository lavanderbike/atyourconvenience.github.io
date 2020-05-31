import { Component, OnInit } from '@angular/core';
import { AppControllerService } from 'src/app/services/appcontroller.service';
import { ILocation } from 'src/app/services/ilocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public address: string;

  constructor(public appController: AppControllerService) {}

  ngOnInit(): void {
    this.address = 'Toronto, Canada';
  }

  public setUserLocation() {
    // Call google api and get latitude/longitude info

    let location: ILocation = {
      latitude: 43,
      longitude: -79,
      address: this.address,
    };

    this.appController.setUserLocation(location);
  }
}
