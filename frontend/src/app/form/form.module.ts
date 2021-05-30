import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockDeleteComponent } from './stock-delete/stock-delete.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StockUpdateComponent,
    StockCreateComponent,
    StockDeleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FormModule { }
