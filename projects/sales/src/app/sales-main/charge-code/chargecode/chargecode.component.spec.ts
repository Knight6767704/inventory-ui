import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargecodeComponent } from './chargecode.component';

describe('ChargecodeComponent', () => {
  let component: ChargecodeComponent;
  let fixture: ComponentFixture<ChargecodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargecodeComponent]
    });
    fixture = TestBed.createComponent(ChargecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
