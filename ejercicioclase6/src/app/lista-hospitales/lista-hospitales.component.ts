import { Component, OnInit } from '@angular/core';
import { Hospital } from '../_model/hospital';
import { HospitalesService } from '../_services/hospitales.service';

@Component({
  selector: 'app-lista-hospitales',
  templateUrl: './lista-hospitales.component.html',
  styleUrls: ['./lista-hospitales.component.scss']
})
export class ListaHospitalesComponent implements OnInit {

  public lista: Hospital[] = [];

  constructor(private service: HospitalesService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (lista) => { this.lista = lista },
      (error) => {/* manjear error */ }
    )
  }

}
