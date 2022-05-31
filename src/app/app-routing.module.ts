import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {SuggestionsComponent} from "./suggestions/suggestions.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)},
  {path: 'suggestions', component: SuggestionsComponent},
  {path: 'contact', component: ContactComponent},
  // {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
