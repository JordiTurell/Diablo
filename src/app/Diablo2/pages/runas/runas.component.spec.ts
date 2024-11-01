import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunasComponent } from './runas.component';

describe('RunasComponent', () => {
  let component: RunasComponent;
  let fixture: ComponentFixture<RunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
