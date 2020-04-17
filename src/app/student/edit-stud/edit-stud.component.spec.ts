import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudComponent } from './edit-stud.component';

describe('EditStudComponent', () => {
  let component: EditStudComponent;
  let fixture: ComponentFixture<EditStudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
