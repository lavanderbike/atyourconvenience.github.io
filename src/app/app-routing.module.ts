import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from './services/constants';
import { HomeComponent } from './views/home/home.component';
import { StoresComponent } from './views/stores/stores.component';

const routes: Routes = [
  { path: Constants.ROUTES.HOME, component: HomeComponent },
  { path: Constants.ROUTES.STORES, component: StoresComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
