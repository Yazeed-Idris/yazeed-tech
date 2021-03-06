import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JSFunctionsRoutingModule } from './jsfunctions-routing.module';
import { JSFunctionsHomeComponent } from './jsfunctions-home/jsfunctions-home.component';
import { FilterFunctionComponent } from './filter-function/filter-function.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    JSFunctionsHomeComponent,
    FilterFunctionComponent
  ],
  imports: [
    CommonModule,
    JSFunctionsRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class JSFunctionsModule { }
