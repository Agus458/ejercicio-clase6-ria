import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hospital } from '../_model/hospital';
import { HospitalesService } from '../_services/hospitales.service';

@Component({
  selector: 'app-nuevo-hospital',
  templateUrl: './nuevo-hospital.component.html',
  styleUrls: ['./nuevo-hospital.component.scss']
})
export class NuevoHospitalComponent implements OnInit {

  public formHospital: FormGroup = new FormGroup({});

  constructor(private service: HospitalesService) { }

  ngOnInit(): void {
    this.formHospital = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  ngOnSubmit(): void {
    this.service.addHospital(new Hospital(this.formHospital.controls.id.value, this.formHospital.controls.nombre.value)).subscribe(
      (ok) => {
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
