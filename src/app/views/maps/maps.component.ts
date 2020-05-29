import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentLatitude = 43.6532;
  currentLongitude = -79.3832;
}
