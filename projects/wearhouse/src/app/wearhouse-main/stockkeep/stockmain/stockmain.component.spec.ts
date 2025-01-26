import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmainComponent } from './stockmain.component';

describe('StockmainComponent', () => {
  let component: StockmainComponent;
  let fixture: ComponentFixture<StockmainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockmainComponent]
    });
    fixture = TestBed.createComponent(StockmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
