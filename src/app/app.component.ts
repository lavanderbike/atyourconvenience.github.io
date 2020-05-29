import { Component, OnInit } from '@angular/core';
import { AppControllerService } from './services/appcontroller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'atyourconvenience';
/**
 *
 */
constructor(public appController: AppControllerService) {
  
}

  ngOnInit(): void {
    console.log("App started");
  }
}
