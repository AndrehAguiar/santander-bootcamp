
import { FormService } from './../form.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/shared/model/stock.model';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['../../app.component.css']
})
export class StockCreateComponent implements OnInit {


  stock: Stock = new Stock();
  submited = false;

  constructor(private formService: FormService, private router: Router) {
  }

  ngOnInit(): void {
  }

  newStock(): void {
    this.submited = false;
    this.stock = new Stock();
  }

  save() {
    this.stock.date = this.formService.formatDate(this.stock.date);
    this.formService.createStock(this.stock)
      .subscribe(data => {
        console.log(data, this.stock)
        this.stock = new Stock();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.submited = true;
    this.save();
  }

  backToDasboard() {
    this.router.navigate(['dashboard'])
  }
}
