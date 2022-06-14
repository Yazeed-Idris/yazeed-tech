import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-function',
  templateUrl: './filter-function.component.html',
  styleUrls: ['./filter-function.component.scss']
})
export class FilterFunctionComponent implements OnInit, OnChanges {
  result: any[];
  input: any[]
  inputFunction: any;

  constructor() {
    this.input = [1, 2, 3, 4]

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    console.log('changes:', changes);
  }

}
