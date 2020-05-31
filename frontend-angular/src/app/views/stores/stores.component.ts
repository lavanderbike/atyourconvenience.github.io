import { Component, OnInit } from '@angular/core';
import { AppControllerService } from 'src/app/services/appcontroller.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  constructor(public appController: AppControllerService) {}
  public address: string;

  ngOnInit(): void {
    this.address = this.appController.address;
  }
}
