import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfComponent } from './inf.component';

describe('InfComponent', () => {
  let component: InfComponent;
  let fixture: ComponentFixture<InfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
