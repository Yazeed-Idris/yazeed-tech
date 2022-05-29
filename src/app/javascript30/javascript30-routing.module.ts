import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Javascript30HomeComponent} from "./javascript30-home/javascript30-home.component";

const routes: Routes = [
  {path: '', component: Javascript30HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Javascript30RoutingModule { }
