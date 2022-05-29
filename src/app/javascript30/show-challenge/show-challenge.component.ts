import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-challenge',
  templateUrl: './show-challenge.component.html',
  styleUrls: ['./show-challenge.component.scss']
})
export class ShowChallengeComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: any,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        console.log(params['id']);
      }
    )

  }

}
