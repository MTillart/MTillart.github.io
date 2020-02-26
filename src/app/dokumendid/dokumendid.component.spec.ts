import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumendidComponent } from './dokumendid.component';

describe('DokumendidComponent', () => {
  let component: DokumendidComponent;
  let fixture: ComponentFixture<DokumendidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokumendidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumendidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
