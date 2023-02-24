/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnotationComponent } from './anotation.component';

describe('AnotationComponent', () => {
  let component: AnotationComponent;
  let fixture: ComponentFixture<AnotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
