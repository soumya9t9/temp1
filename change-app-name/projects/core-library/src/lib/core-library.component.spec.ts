import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLibraryComponent } from './core-library.component';

describe('CoreLibraryComponent', () => {
  let component: CoreLibraryComponent;
  let fixture: ComponentFixture<CoreLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
