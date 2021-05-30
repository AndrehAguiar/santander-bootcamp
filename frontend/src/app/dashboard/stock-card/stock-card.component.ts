import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/shared/model/stock.model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input()
  stock = new Stock();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  get variation(): string {
    const localizedVariationString = this.stock.variation.toLocaleString();
    const prefix = this.stock.variation > 0 ? '+' : '-';
    return `${prefix} ${localizedVariationString.replace('-', '')}%`;
  }

  gotToEditForm(){
    this.route.navigate([`./edit-stock/`,this.stock.id]);
  }
}
