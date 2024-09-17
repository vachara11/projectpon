import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MamaPage } from './mama.page';

describe('MamaPage', () => {
  let component: MamaPage;
  let fixture: ComponentFixture<MamaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
