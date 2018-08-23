/*
* Program : App Modules
* Écrit par : Dan Duc Dao
*/

//Module
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MyDatePickerModule } from "mydatepicker";

//Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "../components/home/index.component";
import { HelloWorldComponent } from "../components/helloWorld/index.component";
import { DataBindingComponent } from "../components/dataBinding/index.component";
import { ClassBindingComponent } from "../components/classBinding/index.component";
import { DistributriceComponent } from "../components/distributrice/index.component";
import { ListeCategorieComponent } from "../components/category/index.component";
import { DetailCategorieComponent } from "../components/category/detail.component";
import { ListeProduitComponent } from "../components/product/index.component";
import { DetailProduitComponent } from "../components/product/detail.component";
import { NgForComponent } from "../components/ngFor/index.component";
import { ShoppingCartComponent } from "../components/shoppingCart/index.component";
import { ShoppingCartProduitComponent } from "../components/shoppingCart/shopping-cart-produit.component";
import { ShoppingCartBasketComponent } from "../components/shoppingCart/shopping-cart-basket.component";
import { AddToCartComponent } from "../components/shoppingCart/add-to-cart.component";
import { FileUploadComponent } from "../components/fileUpload/fileUpload.component";
import { AdminComponent } from "../components/admin/index.component";
import { LoginComponent } from "../components/login/index.component";
import { RegisterComponent } from "../components/login/register.component";
import { ContactComponent } from "../components/contact/index.component";
import { SimpleTinyComponent } from "../components/tinymce/tinymce.component";

//Service
import { AdminService } from "../services/admin.service";
import { CategorieService } from "../services/categorie.service";
import { EmailService } from "../services/email.service";
import { EmployeeService } from "../services/employee.service";
import { FournisseurService } from "../services/fournisseur.service";
import { GoogleMapService } from "../services/googleMap.service";
import { ProduitService } from "../services/produit.service";
import { Service } from "../services/service";
import { ShoppingCartService } from "../services/shoppingCart.service";

//Filter
import { FiltreCategoryPipe } from "../pipes/filtre-category.pipe";
import { FiltreHtmlTagPipe } from "../pipes/filtre-html-tag.pipe";

//Directives
import { EqualValidator } from "../directives/equal-validator.directive";

@NgModule({
  declarations: [
    AddToCartComponent,
    AdminComponent,
    AppComponent,
    ClassBindingComponent,
    ContactComponent,
    DataBindingComponent,
    DetailCategorieComponent,
    DetailProduitComponent,
    DistributriceComponent,
    EqualValidator,
    FileUploadComponent,
    FiltreCategoryPipe,
    FiltreHtmlTagPipe,
    HelloWorldComponent,
    HomeComponent,
    ListeCategorieComponent,
    ListeProduitComponent,
    LoginComponent,
    NgForComponent,
    RegisterComponent,
    routingComponents,
    SimpleTinyComponent,
    ShoppingCartComponent,
    ShoppingCartProduitComponent,
    ShoppingCartBasketComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyDatePickerModule
  ],
  providers: [
    AdminService,
    CategorieService,
    EmailService,
    EmployeeService,
    FournisseurService,
    GoogleMapService,
    ProduitService,
    Service,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
