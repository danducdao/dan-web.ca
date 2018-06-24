import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartProduitComponent } from './shopping-cart-produit.component';

describe('ShoppingCartProduitComponent', () => {
  let component: ShoppingCartProduitComponent;
  let fixture: ComponentFixture<ShoppingCartProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
