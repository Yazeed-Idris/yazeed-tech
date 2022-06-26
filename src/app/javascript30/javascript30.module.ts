import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Javascript30RoutingModule } from './javascript30-routing.module';
import { Javascript30HomeComponent } from './javascript30-home/javascript30-home.component';
import { ChallengeCardComponent } from './challenge-card/challenge-card.component';
import { ShowChallengeComponent } from './show-challenge/show-challenge.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    Javascript30HomeComponent,
    ChallengeCardComponent,
    ShowChallengeComponent
  ],
  imports: [
    CommonModule,
    Javascript30RoutingModule,
    SharedModule,
  ]
})
export class Javascript30Module { }
