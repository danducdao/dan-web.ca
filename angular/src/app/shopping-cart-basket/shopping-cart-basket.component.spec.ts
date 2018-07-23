import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartBasketComponent } from './shopping-cart-basket.component';

describe('ShoppingCartBasketComponent', () => {
  let component: ShoppingCartBasketComponent;
  let fixture: ComponentFixture<ShoppingCartBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
