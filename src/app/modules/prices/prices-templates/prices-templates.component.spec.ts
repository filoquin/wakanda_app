import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesTemplatesComponent } from './prices-templates.component';

describe('PricesTemplatesComponent', () => {
  let component: PricesTemplatesComponent;
  let fixture: ComponentFixture<PricesTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
