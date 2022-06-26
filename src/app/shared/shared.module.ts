import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphDisplayComponent } from './paragraph-display/paragraph-display.component';



@NgModule({
  declarations: [
    ParagraphDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParagraphDisplayComponent,
  ]
})
export class SharedModule { }
