import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form008Component } from './form008.component';

describe('Form008Component', () => {
  let component: Form008Component;
  let fixture: ComponentFixture<Form008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form008Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
