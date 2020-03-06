import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalenderPopUpComponent } from './kalender-pop-up.component';

describe('KalenderPopUpComponent', () => {
  let component: KalenderPopUpComponent;
  let fixture: ComponentFixture<KalenderPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalenderPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalenderPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
