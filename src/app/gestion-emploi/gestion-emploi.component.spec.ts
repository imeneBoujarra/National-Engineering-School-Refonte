import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmploiComponent } from './gestion-emploi.component';

describe('GestionEmploiComponent', () => {
  let component: GestionEmploiComponent;
  let fixture: ComponentFixture<GestionEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEmploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
