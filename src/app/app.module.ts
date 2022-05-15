import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VaccineDetailsComponent } from './vaccine-details/vaccine-details.component';
import { UpdateVaccineComponent } from './update-vaccine/update-vaccine.component';
import { CreateVaccineComponent } from './create-vaccine/create-vaccine.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccineDetailsComponent,
    UpdateVaccineComponent,
    CreateVaccineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }