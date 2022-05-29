import { Component, OnInit } from '@angular/core';
import {ProjectDataModels} from "../../../core/models/project-data.models";

@Component({
  selector: 'app-javascript30-home',
  templateUrl: './javascript30-home.component.html',
  styleUrls: ['./javascript30-home.component.scss']
})
export class Javascript30HomeComponent implements OnInit {

  challengesData: ProjectDataModels[] = [
    {
      title: 'JavaScript Drum Kit',
      description: 'Intractable drum kit that uses keyboard input to play drum sounds.',
      imageUrl: 'assets/Images/drum-background.jpg',
      folderName: '01 - JavaScript Drum Kit',
      pageName: 'index-START.html',
    },
    // {
    //   title: 'CSS + JS Clock',
    //   description: 'In this challenge I was able to make a clock that uses JavaScript to update the time based on the current time.',
    //   imageUrl: 'assets/Images/css-js-background.jpg',
    //   id: '1',
    //   projectHtml: `<p>CSS + JS Clock</p>`,
    // },
    // {
    //   title: 'no title',
    //   description: 'no description',
    //   imageUrl: '2',
    //   id: '',
    //   projectHtml: `<p>no project html</p>`,
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
