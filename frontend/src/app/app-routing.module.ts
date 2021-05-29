import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTodayComponent } from './dashboard/dashboard-today/dashboard-today.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'today', component: DashboardTodayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
