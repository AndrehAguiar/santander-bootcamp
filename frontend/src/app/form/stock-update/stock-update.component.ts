import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/shared/model/stock.model';
import { FormService } from '../form.service';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['../../app.component.css']
})
export class StockUpdateComponent implements OnInit {

  id!: number;
  stock = new Stock();
  submited = false;

  constructor(
    private route: ActivatedRoute,
    private formService: FormService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.stock = new Stock();
    this.id = this.route.snapshot.params['id'];
    this.formService.getStockById(this.id)
      .subscribe(data => {
        console.log(data);
        this.stock = data;
        this.stock.date = this.formService.defaultDate(this.stock.date);
      }, error => console.log(error));
  }
  onSubmit(): void {
    this.updateStock();
  }

  updateStock() {
    this.stock.date = this.formService.formatDate(this.stock.date);
    this.formService.updateStock(this.stock)
      .subscribe(data => {
        console.log(data);
        this.backToDasboard();
      }, error => console.log(error));
  }

  goToDeleteForm(){
    this.router.navigate(['delete-stock', this.stock.id])

  }

  backToDasboard() {
    this.router.navigate(['dashboard'])
  }
}
