import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudComponent } from './list-stud.component';

describe('ListStudComponent', () => {
  let component: ListStudComponent;
  let fixture: ComponentFixture<ListStudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
