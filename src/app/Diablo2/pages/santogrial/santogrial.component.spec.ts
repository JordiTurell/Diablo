import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantogrialComponent } from './santogrial.component';

describe('SantogrialComponent', () => {
  let component: SantogrialComponent;
  let fixture: ComponentFixture<SantogrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantogrialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SantogrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
