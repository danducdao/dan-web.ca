import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstProgramComponent } from './first-program/first-program.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { ListeEmployeeComponent } from './employee/liste.component';
import { DistributriceComponent } from './distributrice/distributrice.component';
import { ListeCategorieComponent } from './categorie/liste.component';
import { DetailCategorieComponent } from './categorie/detail.component';
import { ListeProduitComponent } from './produit/liste.component';
import { DetailProduitComponent } from './produit/detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const routes: Routes = [
      {
          path:'',
          component:HomeComponent
      },
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
        path:'employee',
        component:ListeEmployeeComponent
      },
      {
        path:'distributrice',
        component:DistributriceComponent
      },
      {
        path:'categorie',
        component:ListeCategorieComponent
      },
      {
        path:'categorie/:id',
        component:DetailCategorieComponent
      },
      {
        path:'categorie/new',
        component:DetailCategorieComponent
      },
      {
        path:'produit',
        component:ListeProduitComponent
      },
      {
        path:'produit/new',
        component:DetailProduitComponent
      },
      {
        path:'produit/:id',
        component:DetailProduitComponent
      },
      {
        path:'shoppingcart',
        component:ShoppingCartComponent
      },
      {
        path:'addtocart',
        component:AddToCartComponent
      },
      {
        path:'**',
        component:HomeComponent
      }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ FirstProgramComponent,
                                   DataBindingComponent,
                                   ClassBindingComponent,
                                   ListeEmployeeComponent,
                                   DistributriceComponent,
                                   ListeCategorieComponent,
                                   DetailCategorieComponent,
                                   ListeProduitComponent,
                                   DetailProduitComponent,
                                   ShoppingCartComponent
                                 ];
