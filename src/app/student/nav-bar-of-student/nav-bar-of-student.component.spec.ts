import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOfStudentComponent } from './nav-bar-of-student.component';

describe('NavBarOfStudentComponent', () => {
  let component: NavBarOfStudentComponent;
  let fixture: ComponentFixture<NavBarOfStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarOfStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
