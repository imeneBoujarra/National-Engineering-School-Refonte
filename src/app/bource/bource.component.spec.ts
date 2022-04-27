import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BourceComponent } from './bource.component';

describe('BourceComponent', () => {
  let component: BourceComponent;
  let fixture: ComponentFixture<BourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
