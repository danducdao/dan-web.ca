/*
* Program : App Routing
* Écrit par : Dan Duc Dao
*/

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../components/home/index.component";
import { HelloWorldComponent } from "../components/helloWorld/index.component";
import { DataBindingComponent } from "../components/dataBinding/index.component";
import { ClassBindingComponent } from "../components/classBinding/index.component";
import { NgForComponent } from "../components/ngFor/index.component";
import { DistributriceComponent } from "../components/distributrice/index.component";
import { ListeCategorieComponent } from "../components/category/index.component";
import { DetailCategorieComponent } from "../components/category/detail.component";
import { ListeProduitComponent } from "../components/product/index.component";
import { DetailProduitComponent } from "../components/product/detail.component";
import { ShoppingCartComponent } from "../components/shoppingCart/index.component";
import { AddToCartComponent } from "../components/shoppingCart/add-to-cart.component";
import { AdminComponent } from "../components/admin/index.component";
import { LoginComponent } from "../components/login/index.component";
import { RegisterComponent } from "../components/login/register.component";
import { ContactComponent } from "../components/contact/index.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "helloworld",
    component: HelloWorldComponent
  },
  {
    path: "databinding",
    component: DataBindingComponent
  },
  {
    path: "classbinding",
    component: ClassBindingComponent
  },
  {
    path: "ngFor",
    component: NgForComponent
  },
  {
    path: "distributrice",
    component: DistributriceComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", component: ListeCategorieComponent },
      { path: "categorie", component: ListeCategorieComponent },
      { path: "categorie/new", component: DetailCategorieComponent },
      { path: "categorie/:id", component: DetailCategorieComponent },
      { path: "produit", component: ListeProduitComponent },
      { path: "produit/new", component: DetailProduitComponent },
      { path: "produit/:id", component: DetailProduitComponent }
    ]
  },
  {
    path: "shoppingcart",
    component: ShoppingCartComponent
  },
  {
    path: "addtocart",
    component: AddToCartComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  AddToCartComponent,
  AdminComponent,
  ClassBindingComponent,
  ContactComponent,
  DataBindingComponent,
  DetailCategorieComponent,
  DetailProduitComponent,
  DistributriceComponent,
  HomeComponent,
  HelloWorldComponent,
  ListeCategorieComponent,
  ListeProduitComponent,
  LoginComponent,
  NgForComponent,
  RegisterComponent,
  ShoppingCartComponent
];
