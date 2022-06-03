import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import {ProjectsComponent} from "./projects/projects.component";
import { ChessBoardComponent } from './chess-board/chess-board.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { ChessPieceComponent } from './chess-board/chess-piece/chess-piece.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ChessBoardComponent,
    ChessPieceComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    DragDropModule,
  ]
})
export class ProjectsModule { }
