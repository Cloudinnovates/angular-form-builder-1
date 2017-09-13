import {Component, Input, OnInit} from '@angular/core';
import {IFormElement} from "../../interfaces/FormElement";
import {IFormConfig} from "../../interfaces/FormConfig";

@Component({
  selector: 'components-config',
  templateUrl: './components-config.component.html',
  styleUrls: ['./components-config.component.css']
})
export class ComponentsConfigComponent implements OnInit {

  @Input()
  formElements: IFormElement[];

  config: IFormConfig;

  constructor() {
    this.config = <IFormConfig>{};
  }

  ngOnChanges() {
    this.config.fields = this.formElements;
  }

  ngOnInit() {
  }
}
