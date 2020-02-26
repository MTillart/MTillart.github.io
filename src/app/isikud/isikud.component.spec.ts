import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsikudComponent } from './isikud.component';

describe('IsikudComponent', () => {
  let component: IsikudComponent;
  let fixture: ComponentFixture<IsikudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsikudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsikudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
