import {Component, Input, OnInit} from '@angular/core';
import {ProjectDataModels} from "../../../core/models/project-data.models";

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss']
})
export class ChallengeCardComponent implements OnInit {

  @Input() challengeData: ProjectDataModels = {
    title: 'no title',
    description: 'no description',
    imageUrl: '/assets/Images/no-image.png',
    folderName: '',
    pageName: '',
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  showChallenge() {
    // todo: show challenge page
    window.location.href ='/src/htmlPages/' + this.challengeData.folderName + '/' + this.challengeData.pageName;
  }
}
