import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import { ParticlesConfig } from './particles-config';
import {NavigationEnd, Router} from "@angular/router";

declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yazeed-tech';
  diableSend = false;
  // @ts-ignore
  ideaInputValue: string = '';
  emptyText: string = '';

  @ViewChild('navigationWrapper') navigationWrapper: ElementRef;

  constructor(
    private readonly cookieService: CookieService,
    private router: Router
  ) {}

  sendIdeaToEmail($event: MouseEvent) {
    // const todayDate = new Date();
    // let stupidEncrypt = todayDate.getDay()*3 + ',' + todayDate.getMonth()*5 + ',' + todayDate.getHours()*7
    // this.cookieService.set('stamp', stupidEncrypt);
    // console.log('event', $event);
    this.emptyText = '';
    window.location.href = "mailto:yazeed.a.idris@gmail.com?subject=yazeed-tech-idea&body="+this.ideaInputValue;
  }

  ngOnInit(): void {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/') {
            this.unshrinkNavigation();
          } else {
            this.shrinkNavigation();
          }
        }
      }
    )
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  getIdeaValue(value: string) {
    this.ideaInputValue = value;
  }

  shrinkNavigation() {
    console.log('navigationWrapper', this.navigationWrapper);
    this.navigationWrapper.nativeElement.classList.add('shrink');
  }

  unshrinkNavigation() {
    this.navigationWrapper.nativeElement.classList.remove('shrink');
  }
}
