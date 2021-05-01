import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalesService } from './_services/hospitales.service';
import { ListaHospitalesComponent } from './lista-hospitales/lista-hospitales.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaHospitalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HospitalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
