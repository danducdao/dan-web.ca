import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmployeeComponent } from './liste.component';

describe('EmployeeComponent', () => {
  let component: ListeEmployeeComponent;
  let fixture: ComponentFixture<ListeEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
