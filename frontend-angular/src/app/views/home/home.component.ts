import { Component, OnInit, Input } from '@angular/core';
import { AppControllerService } from 'src/app/services/controller';
import {
  Location,
  Appearance,
  GermanAddress,
} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public address: string;
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;

  constructor(private controller: AppControllerService) {}

  ngOnInit(): void {
    this.address = this.controller.address;
  }

  setAddress() {
    this.controller.setAddress(this.address);
  }
}
