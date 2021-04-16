import { ComponentFixture, TestBed } from '@angular/core/testing';

import { shuffleComponent } from './shuffle-component.component';

describe('FeatureComponentComponent', () => {
  let component: shuffleComponent;
  let fixture: ComponentFixture<shuffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ shuffleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(shuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
