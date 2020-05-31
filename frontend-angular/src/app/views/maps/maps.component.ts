import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  public latitude: number;
  public longitude: number;

  constructor() {}

  ngOnInit(): void {
    this.latitude = 43.6532;
    this.longitude = -79.3832;
  }
}
