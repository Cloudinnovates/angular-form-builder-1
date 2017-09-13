import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsConfigComponent } from './components-config.component';

describe('ComponentsConfigComponent', () => {
  let component: ComponentsConfigComponent;
  let fixture: ComponentFixture<ComponentsConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
