import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Date0005Component } from './date0005.component';

describe('Date0005Component', () => {
  let component: Date0005Component;
  let fixture: ComponentFixture<Date0005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Date0005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Date0005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
