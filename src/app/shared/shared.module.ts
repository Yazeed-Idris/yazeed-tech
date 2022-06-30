import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphDisplayComponent } from './paragraph-display/paragraph-display.component';
import { DataContainerComponent } from './data-container/data-container.component';



@NgModule({
  declarations: [
    ParagraphDisplayComponent,
    DataContainerComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        ParagraphDisplayComponent,
        DataContainerComponent,
    ]
})
export class SharedModule { }
