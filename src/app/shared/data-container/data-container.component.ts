import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.scss']
})
export class DataContainerComponent implements OnInit {

  data: any[] = []
  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
    console.log(this.data);
    console.log('kdjldkjd', this.dataService.getIndex(3));
  }

}
