import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBourseComponent } from './gestion-bourse.component';

describe('GestionBourseComponent', () => {
  let component: GestionBourseComponent;
  let fixture: ComponentFixture<GestionBourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionBourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
