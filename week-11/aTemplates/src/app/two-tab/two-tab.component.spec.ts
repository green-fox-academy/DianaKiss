import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTabComponent } from './two-tab.component';

describe('TwoTabComponent', () => {
  let component: TwoTabComponent;
  let fixture: ComponentFixture<TwoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
