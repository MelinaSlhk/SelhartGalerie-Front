import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobBoutonComponent } from './blob-bouton.component';

describe('BlobBoutonComponent', () => {
  let component: BlobBoutonComponent;
  let fixture: ComponentFixture<BlobBoutonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlobBoutonComponent]
    });
    fixture = TestBed.createComponent(BlobBoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
