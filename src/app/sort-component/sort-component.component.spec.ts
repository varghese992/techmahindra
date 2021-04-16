import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sortComponent } from './sort-component.component';

describe('ChildComponent2Component', () => {
  let component: sortComponent;
  let fixture: ComponentFixture<sortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ sortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(sortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
