import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudComponent } from './create-stud.component';

describe('CreateStudComponent', () => {
  let component: CreateStudComponent;
  let fixture: ComponentFixture<CreateStudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
