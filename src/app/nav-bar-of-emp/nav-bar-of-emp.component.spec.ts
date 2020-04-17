import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOfEmpComponent } from './nav-bar-of-emp.component';

describe('NavBarOfEmpComponent', () => {
  let component: NavBarOfEmpComponent;
  let fixture: ComponentFixture<NavBarOfEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarOfEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarOfEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
