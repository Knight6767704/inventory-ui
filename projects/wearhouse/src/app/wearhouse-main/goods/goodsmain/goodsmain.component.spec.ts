import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsmainComponent } from './goodsmain.component';

describe('GoodsmainComponent', () => {
  let component: GoodsmainComponent;
  let fixture: ComponentFixture<GoodsmainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsmainComponent]
    });
    fixture = TestBed.createComponent(GoodsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
