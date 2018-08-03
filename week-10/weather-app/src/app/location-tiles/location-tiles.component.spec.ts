import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTilesComponent } from './location-tiles.component';

describe('LocationTilesComponent', () => {
  let component: LocationTilesComponent;
  let fixture: ComponentFixture<LocationTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
