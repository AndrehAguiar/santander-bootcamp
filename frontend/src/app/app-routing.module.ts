import { StockUpdateComponent } from './form/stock-update/stock-update.component';
import { StockCreateComponent } from './form/stock-create/stock-create.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTodayComponent } from './dashboard/dashboard-today/dashboard-today.component';
import { StockDeleteComponent } from './form/stock-delete/stock-delete.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'today', component: DashboardTodayComponent },
  { path: 'new-stock', component: StockCreateComponent },
  { path: 'edit-stock/:id', component: StockUpdateComponent },
  { path: 'delete-stock/:id', component: StockDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
