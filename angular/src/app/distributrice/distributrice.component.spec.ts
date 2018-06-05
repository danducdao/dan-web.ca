import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributriceComponent } from './distributrice.component';

describe('DistributriceComponent', () => {
  let component: DistributriceComponent;
  let fixture: ComponentFixture<DistributriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
