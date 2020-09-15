import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBetsellersComponent } from './product-betsellers.component';

describe('ProductBetsellersComponent', () => {
  let component: ProductBetsellersComponent;
  let fixture: ComponentFixture<ProductBetsellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBetsellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBetsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
