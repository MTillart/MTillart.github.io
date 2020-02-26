import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaarvestusComponent } from './ajaarvestus.component';

describe('AjaarvestusComponent', () => {
  let component: AjaarvestusComponent;
  let fixture: ComponentFixture<AjaarvestusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaarvestusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaarvestusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
