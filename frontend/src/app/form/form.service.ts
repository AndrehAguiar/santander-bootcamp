import { Stock } from 'src/app/shared/model/stock.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private BASE_URL = 'https://devweek-santander.herokuapp.com/bootcamp/api/v1/stock';

  constructor(private http: HttpClient, private router: Router) { }

  formatDate(date: string) {
    return new DatePipe('pt-BR').transform(date, 'dd/MM/yyyy') as string;
  }

  defaultDate(date: string) {
    return date.split("/").reverse().join("-")
  }

  getStockById(id: number): Observable<any> {
    return this.http.get<Stock>(`${this.BASE_URL}/${id}`);
  }

  createStock(stock: Object): Observable<Object> {
    return this.http.post<Stock>(`${this.BASE_URL}`, stock);
  }

  updateStock(value: any): Observable<Object> {
    return this.http.put<Stock>(`${this.BASE_URL}`, value);
  }

  deleteStock(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`, { responseType: 'text' });
  }
}
