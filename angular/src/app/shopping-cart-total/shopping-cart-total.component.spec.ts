import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartTotalComponent } from './shopping-cart-total.component';

describe('ShoppingCartTotalComponent', () => {
  let component: ShoppingCartTotalComponent;
  let fixture: ComponentFixture<ShoppingCartTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
