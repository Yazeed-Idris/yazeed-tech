import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../core/services/backend.service";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  constructor(private readonly backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getHello();
  }

}
