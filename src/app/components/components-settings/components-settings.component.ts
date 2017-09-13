import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IFormElement} from "../../interfaces/FormElement";

@Component({
  selector: 'components-settings',
  templateUrl: './components-settings.component.html',
  styleUrls: ['./components-settings.component.css']
})
export class ComponentsSettingsComponent implements OnInit {

  @Input()
  selectedElement: IFormElement;

  @Output()
  changeAttr: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(e: KeyboardEvent) {
    const attr = (<HTMLInputElement>e.target).name;
    const value = (<HTMLInputElement>e.target).value;
    this.changeAttr.emit([attr, value]);
  }
}
