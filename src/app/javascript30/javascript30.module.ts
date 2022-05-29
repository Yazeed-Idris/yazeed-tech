import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Javascript30RoutingModule } from './javascript30-routing.module';
import { Javascript30HomeComponent } from './javascript30-home/javascript30-home.component';


@NgModule({
  declarations: [
    Javascript30HomeComponent
  ],
  imports: [
    CommonModule,
    Javascript30RoutingModule
  ]
})
export class Javascript30Module { }
