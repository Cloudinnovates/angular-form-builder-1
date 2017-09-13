import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSelectorComponent } from './components-selector.component';

describe('ComponentsSelectorComponent', () => {
  let component: ComponentsSelectorComponent;
  let fixture: ComponentFixture<ComponentsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
