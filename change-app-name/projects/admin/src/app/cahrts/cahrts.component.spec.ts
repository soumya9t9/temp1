import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CahrtsComponent } from './cahrts.component';

describe('CahrtsComponent', () => {
  let component: CahrtsComponent;
  let fixture: ComponentFixture<CahrtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CahrtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CahrtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
