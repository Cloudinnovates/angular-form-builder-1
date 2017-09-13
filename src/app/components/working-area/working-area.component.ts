import { Component, OnInit } from '@angular/core';
import { IFormElement } from "../../interfaces/FormElement";
import * as elementsMock from "../../constants/form-elements.json";

const elements = (<any>elementsMock).elements;

@Component({
  selector: 'working-area',
  templateUrl: './working-area.component.html',
  styleUrls: ['./working-area.component.css']
})
export class WorkingAreaComponent implements OnInit {

  public formElements: IFormElement[];
  public selectedElement: IFormElement;

  constructor() {
    this.formElements = elements;
  }

  ngOnInit() {
  }

  selectElement(element: IFormElement): void {
    this.selectedElement = element;
  }

  changeElementAttr(data) {
    let [attr, value] = data;
    this.selectedElement[attr] = value;
  }

  addElementToForm(elemType: string): void {
    const newElem = {
      "elem_id": this.formElements.length,
      "element": elemType,
      "label": "New input element",
      "placeholder": "placeholder",
    };

    this.formElements.push(newElem);
  }

  removeElementFromForm(elem_id: number): void {
    const idxToRemove = this.formElements.findIndex(elem => elem.elem_id === elem_id);
    if (this.selectedElement.elem_id === this.formElements[idxToRemove].elem_id) {
      this.selectedElement = null;
    }
    this.formElements.splice(idxToRemove, 1);
  }

}
