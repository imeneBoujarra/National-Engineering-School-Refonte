import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnseignantsComponent } from './list-enseignant.component';

describe('ListEnseignantComponent', () => {
  let component: ListEnseignantsComponent;
  let fixture: ComponentFixture<ListEnseignantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnseignantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
