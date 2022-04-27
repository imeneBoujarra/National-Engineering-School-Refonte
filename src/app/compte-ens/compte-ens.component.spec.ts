import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteEnsComponent } from './compte-ens.component';

describe('CompteEnsComponent', () => {
  let component: CompteEnsComponent;
  let fixture: ComponentFixture<CompteEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
