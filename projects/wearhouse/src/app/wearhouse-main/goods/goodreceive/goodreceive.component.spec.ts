import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodreceiveComponent } from './goodreceive.component';

describe('GoodreceiveComponent', () => {
  let component: GoodreceiveComponent;
  let fixture: ComponentFixture<GoodreceiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodreceiveComponent]
    });
    fixture = TestBed.createComponent(GoodreceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
