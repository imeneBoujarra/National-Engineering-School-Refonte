import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatCComponent } from './quat-c.component';

describe('QuatCComponent', () => {
  let component: QuatCComponent;
  let fixture: ComponentFixture<QuatCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuatCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
