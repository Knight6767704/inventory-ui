import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldComponent } from './hold.component';

describe('HoldComponent', () => {
  let component: HoldComponent;
  let fixture: ComponentFixture<HoldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoldComponent]
    });
    fixture = TestBed.createComponent(HoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
