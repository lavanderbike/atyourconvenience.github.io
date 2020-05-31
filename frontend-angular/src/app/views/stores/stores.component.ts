import { Component, OnInit } from '@angular/core';
import { AppControllerService } from 'src/app/services/appcontroller.service';
import { IMap } from 'src/app/services/ilocation';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  public map: IMap;

  constructor(public appController: AppControllerService) {}

  ngOnInit(): void {
    this.map = this.appController.map;
  }
}
