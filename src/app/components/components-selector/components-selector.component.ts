import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import * as formComponents from '../../constants/components-types.json';

const componentList = (<any>formComponents).components;

@Component({
  selector: 'components-selector',
  templateUrl: './components-selector.component.html',
  styleUrls: ['./components-selector.component.css']
})
export class ComponentsSelectorComponent implements OnInit {

  public components: string[];

  @Output()
  addElement: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.components = componentList;
  }

  ngOnInit() {
  }

  public capitalize(word: string): string {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  addElementMethod(component: string): void {
    this.addElement.emit(component);
  }

}
