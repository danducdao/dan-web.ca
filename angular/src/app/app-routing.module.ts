import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstProgramComponent } from './first-program/first-program.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EmployeListComponent } from './employe-list/employe-list.component';

const routes: Routes = [
      {
        path:'first-program',
        component:FirstProgramComponent
      },
      {
        path:'data-binding',
        component:DataBindingComponent
      },
      {
        path:'class-binding',
        component:ClassBindingComponent
      },
      {
        path:'employe-list',
        component:EmployeListComponent
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ FirstProgramComponent, DataBindingComponent ];
