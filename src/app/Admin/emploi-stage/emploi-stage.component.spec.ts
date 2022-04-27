import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiStageComponent } from './emploi-stage.component';

describe('EmploiStageComponent', () => {
  let component: EmploiStageComponent;
  let fixture: ComponentFixture<EmploiStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploiStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
