import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gridComponent } from './grid-component.component';

describe('FeatureComponentComponent', () => {
  let component: gridComponent;
  let fixture: ComponentFixture<gridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ gridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(gridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
