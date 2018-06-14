import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EmployeService } from './employe.service';
import { ProduitService } from './produit.service';
import { CategorieService } from './categorie.service';
import { DistributriceComponent } from './distributrice/distributrice.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ListeCategorieComponent } from './categorie/liste.component';
import { ListeProduitComponent } from './produit/liste.component';
import { ListeEmployeeComponent } from './employee/liste.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DataBindingComponent,
    ClassBindingComponent,
    HomeComponent,
    DistributriceComponent,
    CustomPipePipe,
    ListeCategorieComponent,
    ListeProduitComponent,
    ListeEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeService,ProduitService,CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
