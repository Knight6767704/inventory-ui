import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargegroupComponent } from './chargegroup.component';

describe('ChargegroupComponent', () => {
  let component: ChargegroupComponent;
  let fixture: ComponentFixture<ChargegroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargegroupComponent]
    });
    fixture = TestBed.createComponent(ChargegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
