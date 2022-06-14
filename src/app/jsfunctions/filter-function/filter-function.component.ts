import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-function',
  templateUrl: './filter-function.component.html',
  styleUrls: ['./filter-function.component.scss']
})
export class FilterFunctionComponent implements OnInit {
  result: any[];
  input: any[]
  inputFunction: any;

  constructor() {
    this.input = [1, 2, 3, 4]
    this.result = this.input.filter((el) => el > 0);
    this.inputFunction = eval('(el) => el > 0')
  }

  ngOnInit(): void {
  }

  arrayChanged($event) {
    this.input = $event.target.value.split(',');
    this.filterArray();
  }

  functionChanged($event) {
    this.inputFunction = eval($event.target.value);
    this.filterArray();
  }

  filterArray() {
    this.result = this.input.filter(this.inputFunction);
  }
}
