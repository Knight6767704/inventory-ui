import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutwayComponent } from './putway.component';

describe('PutwayComponent', () => {
  let component: PutwayComponent;
  let fixture: ComponentFixture<PutwayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutwayComponent]
    });
    fixture = TestBed.createComponent(PutwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
