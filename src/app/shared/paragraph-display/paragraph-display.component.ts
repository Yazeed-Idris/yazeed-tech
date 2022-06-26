import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraph-display',
  templateUrl: './paragraph-display.component.html',
  styleUrls: ['./paragraph-display.component.scss']
})
export class ParagraphDisplayComponent implements OnInit {
  @Input() information: {title: string, description: string} = {
    title: 'Yazeed Idris',
    description: 'I am a software engineering student at KFUPM',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
