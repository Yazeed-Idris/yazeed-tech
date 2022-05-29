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
      link: 'https://yazeed-idris.github.io/JavaScript-Drum-Kit/',
    },
    {
      title: 'CSS + JS Clock',
      description: 'In this challenge I was able to make a clock that uses JavaScript to update the time based on the current time.',
      imageUrl: 'assets/Images/css-js-background.jpg',
      link: 'https://yazeed-idris.github.io/JS-and-CSS-Clock/',
    },
    {
      title: 'no title',
      description: 'no description',
      imageUrl: '/assets/Images/no-image.png',
      link: 'https://yazeed-idris.github.io/',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
