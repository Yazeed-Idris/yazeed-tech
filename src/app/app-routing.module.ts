import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'javascript30', loadChildren: () => import('./javascript30/javascript30.module').then(m => m.Javascript30Module)},
  {path: 'about', component: },
  {path: '**', redirectTo: '/about'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
