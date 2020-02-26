import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToimikudComponent } from './toimikud.component';

describe('ToimikudComponent', () => {
  let component: ToimikudComponent;
  let fixture: ComponentFixture<ToimikudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToimikudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToimikudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
