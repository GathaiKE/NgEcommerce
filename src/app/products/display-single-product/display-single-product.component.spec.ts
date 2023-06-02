import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleProductComponent } from './display-single-product.component';

describe('DisplaySingleProductComponent', () => {
  let component: DisplaySingleProductComponent;
  let fixture: ComponentFixture<DisplaySingleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DisplaySingleProductComponent]
    });
    fixture = TestBed.createComponent(DisplaySingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
