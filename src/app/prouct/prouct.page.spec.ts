import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProuctPage } from './prouct.page';

describe('ProuctPage', () => {
  let component: ProuctPage;
  let fixture: ComponentFixture<ProuctPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
