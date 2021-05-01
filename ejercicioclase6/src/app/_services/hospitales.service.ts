import { Injectable } from '@angular/core';
import { Hospital } from '../_model/hospital';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  private hospitales: Hospital[] = [new Hospital(1, 'Massachusetts General'), new Hospital(2, 'Toronto General'), new Hospital(3,
    'The Johns Hopkins'), new Hospital(4, 'Mayo Clinic')];

  constructor() { }

  public getAll(): Observable<Hospital[]> {
    const result = new Observable<Hospital[]>(observer => {
      setTimeout(() => {
        observer.next(this.hospitales);
      }, 1000);
    });
    return result;
  }

}
