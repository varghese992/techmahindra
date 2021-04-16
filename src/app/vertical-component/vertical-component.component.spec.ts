import { ComponentFixture, TestBed } from '@angular/core/testing';

import { verticalComponent } from './vertical-component.component';

describe('ChildComponent2Component', () => {
  let component: verticalComponent;
  let fixture: ComponentFixture<verticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ verticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(verticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
