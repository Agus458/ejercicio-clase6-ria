import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoHospitalComponent } from './nuevo-hospital.component';

describe('NuevoHospitalComponent', () => {
  let component: NuevoHospitalComponent;
  let fixture: ComponentFixture<NuevoHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
