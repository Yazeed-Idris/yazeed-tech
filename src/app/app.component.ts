import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import { ParticlesConfig } from './particles-config';

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

  // @ViewChild('navigationWrapper', ) navigationWrapper: ElementRef;

  constructor(
    private readonly cookieService: CookieService
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

    // this.invokeParticles();

    // let message = this.cookieService.get('stamp')
    // if (message) {
    //   let check = this.checkIfHourPassed(message)
    //   if (!check) {
    //     this.diableSend = true
    //   }
    // }
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  checkIfHourPassed(message: string) {
    let messageArr = message.split(',');
    let day = parseInt(messageArr[0])/3;
    let month = parseInt(messageArr[1])/5;
    let hour = parseInt(messageArr[2])/7;
    let todayDate = new Date();
    return (todayDate.getDay() !== day || todayDate.getMonth() !== month || todayDate.getHours() !== hour);
  }

  getIdeaValue(value: string) {
    this.ideaInputValue = value;
  }

  shrinkNavigation() {

  }
}
