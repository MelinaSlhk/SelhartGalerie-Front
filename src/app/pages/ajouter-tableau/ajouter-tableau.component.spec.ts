import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTableauComponent } from './ajouter-tableau.component';

describe('AjouterTableauComponent', () => {
  let component: AjouterTableauComponent;
  let fixture: ComponentFixture<AjouterTableauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterTableauComponent]
    });
    fixture = TestBed.createComponent(AjouterTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
