import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMesFavorisComponent } from './page-mes-favoris.component';

describe('PageMesFavorisComponent', () => {
  let component: PageMesFavorisComponent;
  let fixture: ComponentFixture<PageMesFavorisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMesFavorisComponent]
    });
    fixture = TestBed.createComponent(PageMesFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
