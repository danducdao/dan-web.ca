import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeService } from './employe.service';
import { DistributriceComponent } from './distributrice/distributrice.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DataBindingComponent,
    ClassBindingComponent,
    EmployeListComponent,
    HomeComponent,
    DistributriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
