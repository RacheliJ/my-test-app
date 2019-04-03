import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleDivsComponent } from './middle-divs.component';

describe('MiddleDivsComponent', () => {
  let component: MiddleDivsComponent;
  let fixture: ComponentFixture<MiddleDivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleDivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
