import { Component, OnInit } from '@angular/core';
import { AppControllerService } from './services/controller';

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
constructor(public controllerService: AppControllerService) {
  
}

  ngOnInit() {}
}
