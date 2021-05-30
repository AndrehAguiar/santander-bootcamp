import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../shared/model/stock.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly BASE_URL = 'https://devweek-santander.herokuapp.com/bootcamp/api/v1/stock';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.BASE_URL}`).toPromise();
  }

  async getStocksToday(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.BASE_URL}/today`).toPromise();
  }
}
