import { Component, OnInit } from '@angular/core';
import { AppControllerService } from 'src/app/services/appcontroller.service';

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

  public searchAddress() {
    this.appController.setAddress(this.address);
  }
}
