import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EmployeService } from '../services/employe.service';
import { ProduitService } from '../services/produit.service';
import { CategorieService } from '../services/categorie.service';
import { DistributriceComponent } from './distributrice/distributrice.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomPipePipe } from 'src/pipes/custom-pipe.pipe';
import { ListeCategorieComponent } from './categorie/liste.component';
import { DetailCategorieComponent } from './categorie/detail.component';
import { ListeProduitComponent } from './produit/liste.component';
import { DetailProduitComponent } from './produit/detail.component';
import { ListeEmployeeComponent } from './employee/liste.component';
import { FiltreProduitPipe } from 'src/pipes/filtre-produit.pipe';
import { Regex } from 'src/classes/regex';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartProduitComponent } from './shopping-cart-produit/shopping-cart-produit.component';
import { FiltreCategoryPipe } from 'src/pipes/filtre-category.pipe';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ShoppingCartTotalComponent } from './shopping-cart-total/shopping-cart-total.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

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
    DetailCategorieComponent,
    ListeProduitComponent,
    DetailProduitComponent,
    ListeEmployeeComponent,
    FiltreProduitPipe,
    ShoppingCartComponent,
    ShoppingCartProduitComponent,
    FiltreCategoryPipe,
    AddToCartComponent,
    ShoppingCartTotalComponent,
    FileUploadComponent
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
