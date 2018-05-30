import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstProgramComponent } from './first-program/first-program.component';
const routes: Routes = [
      { path:'first-program',component:FirstProgramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FirstProgramComponent];
