import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';
import { CostInfoComponent } from './cost-info/cost-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerFormComponent,
    CostInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
