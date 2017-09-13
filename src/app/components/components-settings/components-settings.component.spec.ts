import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSettingsComponent } from './components-settings.component';

describe('ComponentsSettingsComponent', () => {
  let component: ComponentsSettingsComponent;
  let fixture: ComponentFixture<ComponentsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
