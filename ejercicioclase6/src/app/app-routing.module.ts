import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaHospitalesComponent } from './lista-hospitales/lista-hospitales.component';

const routes: Routes = [
  {
    path: ''
    ,
    children: [
      { path: 'hospitales', component: ListaHospitalesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
