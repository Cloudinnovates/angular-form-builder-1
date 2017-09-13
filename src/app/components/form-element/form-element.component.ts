import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IFormElement} from "../../interfaces/FormElement";

@Component({
  selector: 'form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  @Input()
  elementData: IFormElement;

  @Output()
  removeElement: EventEmitter<any> = new EventEmitter<any>();

  public id: number;

  constructor() {}

  ngOnChanges() {
    this.id = this.elementData.elem_id;
  }

  ngOnInit() {
  }

  removeElementMethod(): void {
    this.removeElement.emit(this.id);
  }

}
