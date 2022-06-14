import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {ChessBoardComponent} from "./chess-board/chess-board.component";

const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'javascript30', loadChildren: () => import('../javascript30/javascript30.module').then(m => m.Javascript30Module)},
  {path: 'chess-board', component: ChessBoardComponent},
  {path: 'JSFunctions', loadChildren: () => import('../jsfunctions/jsfunctions.module').then(m => m.JSFunctionsModule)},
  // {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
