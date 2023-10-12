import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErreur404Component } from './page-erreur404.component';

describe('PageErreur404Component', () => {
  let component: PageErreur404Component;
  let fixture: ComponentFixture<PageErreur404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageErreur404Component]
    });
    fixture = TestBed.createComponent(PageErreur404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
