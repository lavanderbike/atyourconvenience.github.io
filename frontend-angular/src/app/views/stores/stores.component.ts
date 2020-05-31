import { Component, OnInit } from '@angular/core';
import { AppControllerService } from 'src/app/services/controller';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  public address: string;

  constructor(private controller: AppControllerService) {}

  ngOnInit(): void {
    this.address = this.controller.address;
  }
}
