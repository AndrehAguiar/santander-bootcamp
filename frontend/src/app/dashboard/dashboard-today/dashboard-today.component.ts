import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/model/stock.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-today',
  templateUrl: './dashboard-today.component.html',
  styleUrls: ['./dashboard-today.component.css']
})
export class DashboardTodayComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchStocksToday();
  }

  async fetchStocksToday(): Promise<void> {
    this.stocks = await this.dashboardService.getStocksToday();
  }

}
