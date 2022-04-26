import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yazeed-tech';

  sendIdeaToEmail($event: MouseEvent) {
    console.log('event', $event);
  }
}
