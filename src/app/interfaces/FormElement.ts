export interface IFormElement {
  elem_id: number; // unique element id
  element: string;
  id?: string; // html attribute 'id'
  classList?: string[];
  name?: string;
  value?: any;
  placeholder?: string;
  type?: string;
  label?: string;
}
