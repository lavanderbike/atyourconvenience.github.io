import { Component, OnInit, Input } from '@angular/core';
import { IMap } from 'src/app/services/ilocation';

@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  @Input() map: IMap;

  constructor() {}

  ngOnInit(): void {}
}
