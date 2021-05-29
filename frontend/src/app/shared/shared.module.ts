import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
})
export class SharedModule { }
