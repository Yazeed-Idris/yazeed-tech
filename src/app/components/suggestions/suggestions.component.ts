import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../../core/services/backend.service";
import {FiledTypeModel} from "../../../core/models/filed-type.model";
import {FieldTypeEnum} from "../../../core/enums/field-type.enum";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  fields: FiledTypeModel[] = [
    {type: FieldTypeEnum.NUMBER, label: 'Text'},
    {type: FieldTypeEnum.TEXT, label: 'Text'},
    {type: FieldTypeEnum.IMAGE, label: 'Text'},
    {type: FieldTypeEnum.DATE, label: 'Text'},
    {type: FieldTypeEnum.TEXT, label: 'Text'},
  ]

  constructor(private readonly backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getHello();
  }

  submitFunction() {
    console.log('wooooooow it works');
  }
}
