import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMesTableauxComponent } from './page-mes-tableaux.component';

describe('PageMesTableauxComponent', () => {
  let component: PageMesTableauxComponent;
  let fixture: ComponentFixture<PageMesTableauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMesTableauxComponent]
    });
    fixture = TestBed.createComponent(PageMesTableauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
