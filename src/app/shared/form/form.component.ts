import {Component, Input, OnInit} from '@angular/core';
import {FiledTypeModel} from "../../../core/models/filed-type.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() fields: FiledTypeModel[] = [];
  @Input() submitFunction: Function;
  constructor() { }

  ngOnInit(): void {
  }

}
