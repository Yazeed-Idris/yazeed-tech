import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'yazeed-tech';
  diableSend = false;
  constructor(
    private readonly cookieService: CookieService
  ) {
  }

  sendIdeaToEmail($event: MouseEvent) {
    const todayDate = new Date();
    let stupidEncrypt = todayDate.getDay()*3 + ',' + todayDate.getMonth()*5 + ',' + todayDate.getHours()*7
    this.cookieService.set('stamp', stupidEncrypt);
    console.log('event', $event);
  }

  ngOnInit(): void {

    let message = this.cookieService.get('stamp')
    if (message) {
      let check = this.checkIfHourPassed(message)
      if (!check) {
        this.diableSend = true
      }
    }
  }

  checkIfHourPassed(message: string) {
    let messageArr = message.split(',');
    let day = parseInt(messageArr[0])/3;
    let month = parseInt(messageArr[1])/5;
    let hour = parseInt(messageArr[2])/7;
    let todayDate = new Date();
    return (todayDate.getDay() !== day || todayDate.getMonth() !== month || todayDate.getHours() !== hour);
  }
}
