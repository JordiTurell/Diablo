import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPjComponent } from './select-pj.component';

describe('SelectPjComponent', () => {
  let component: SelectPjComponent;
  let fixture: ComponentFixture<SelectPjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
