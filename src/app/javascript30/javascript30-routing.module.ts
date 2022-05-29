import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Javascript30HomeComponent} from "./javascript30-home/javascript30-home.component";
import {ShowChallengeComponent} from "./show-challenge/show-challenge.component";

const routes: Routes = [
  {path: '', component: Javascript30HomeComponent},
  {path: 'show-challenge', children: [
      {path: ':id', component: ShowChallengeComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Javascript30RoutingModule { }
