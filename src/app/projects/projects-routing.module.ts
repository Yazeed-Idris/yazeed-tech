import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {ChessBoardComponent} from "./chess-board/chess-board.component";

const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'chess-board', component: ChessBoardComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
