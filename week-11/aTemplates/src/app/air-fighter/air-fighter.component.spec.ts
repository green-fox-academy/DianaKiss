import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFighterComponent } from './air-fighter.component';

describe('AirFighterComponent', () => {
  let component: AirFighterComponent;
  let fixture: ComponentFixture<AirFighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirFighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
