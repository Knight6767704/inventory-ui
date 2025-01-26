import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodissueComponent } from './goodissue.component';

describe('GoodissueComponent', () => {
  let component: GoodissueComponent;
  let fixture: ComponentFixture<GoodissueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodissueComponent]
    });
    fixture = TestBed.createComponent(GoodissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
