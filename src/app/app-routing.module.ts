import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {SuggestionsComponent} from "./components/suggestions/suggestions.component";
import {ContactComponent} from "./components/contact/contact.component";

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
