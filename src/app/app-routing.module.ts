import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from './services/constants';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: Constants.ROUTES.HOME, component: HomeComponent },
  { path: '', redirectTo: Constants.ROUTES.HOME, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
