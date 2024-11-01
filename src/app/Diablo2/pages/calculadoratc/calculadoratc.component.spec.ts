import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoratcComponent } from './calculadoratc.component';

describe('CalculadoratcComponent', () => {
  let component: CalculadoratcComponent;
  let fixture: ComponentFixture<CalculadoratcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoratcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoratcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
