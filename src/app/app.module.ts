import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { PricesComponent } from './prices/prices.component';
import { CustomizeComponent } from './customize/customize.component';

@NgModule({
  declarations: [
    AppComponent,
    PricesComponent,
    CustomizeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
