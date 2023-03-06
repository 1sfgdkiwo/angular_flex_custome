import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalamanAPIComponent } from './halaman-api.component';

describe('HalamanAPIComponent', () => {
  let component: HalamanAPIComponent;
  let fixture: ComponentFixture<HalamanAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalamanAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalamanAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
