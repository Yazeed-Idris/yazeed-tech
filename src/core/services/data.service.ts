import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any[] = [
    {
      value: 1,
    } ,
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 1,
    } ,
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 1,
    } ,
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 7,
    },
    {
      value: 'i'
    },
    {
      value: 'M'
    }
  ]

  constructor() { }

  getData() {
    return this.data.slice();
  }

  addData(value: any) {
    this.data.push(value);
  }

  removeData(value: any) {

  }

  getIndex(value: any) {
    return this.data.indexOf(value);
  }
}
