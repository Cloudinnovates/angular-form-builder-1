import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { ComponentsSelectorComponent } from './components/components-selector/components-selector.component';
import { ComponentsConfigComponent } from './components/components-config/components-config.component';
import { ComponentsSettingsComponent } from './components/components-settings/components-settings.component';
import { WorkingAreaComponent } from './components/working-area/working-area.component';
import { FormElementComponent } from './components/form-element/form-element.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    ComponentsSelectorComponent,
    ComponentsConfigComponent,
    ComponentsSettingsComponent,
    WorkingAreaComponent,
    FormElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
