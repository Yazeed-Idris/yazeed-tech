import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphDisplayComponent } from './paragraph-display/paragraph-display.component';
import { DataContainerComponent } from './data-container/data-container.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ParagraphDisplayComponent,
    DataContainerComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ParagraphDisplayComponent,
    DataContainerComponent,
    FormComponent,
  ]
})
export class SharedModule { }
