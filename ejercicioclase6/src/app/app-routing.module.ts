import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaHospitalesComponent } from './lista-hospitales/lista-hospitales.component';
import { NuevoHospitalComponent } from './nuevo-hospital/nuevo-hospital.component';

const routes: Routes = [
  {
    path: ''
    ,
    children: [
      { path: 'hospitales', component: ListaHospitalesComponent },
      { path: 'nuevo_hospital', component: NuevoHospitalComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
