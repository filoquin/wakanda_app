import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPromosComponent } from './order-promos.component';

describe('OrderPromosComponent', () => {
  let component: OrderPromosComponent;
  let fixture: ComponentFixture<OrderPromosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPromosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
