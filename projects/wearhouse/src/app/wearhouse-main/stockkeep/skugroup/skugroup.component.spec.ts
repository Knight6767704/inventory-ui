import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkugroupComponent } from './skugroup.component';

describe('SkugroupComponent', () => {
  let component: SkugroupComponent;
  let fixture: ComponentFixture<SkugroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkugroupComponent]
    });
    fixture = TestBed.createComponent(SkugroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
