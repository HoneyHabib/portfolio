import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingSocial } from './floating-social';

describe('FloatingSocial', () => {
  let component: FloatingSocial;
  let fixture: ComponentFixture<FloatingSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingSocial],
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingSocial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
