/*
* Program : Routing
* Écrit par : Dan Duc Dao
*/

import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/index";
import HelloWorld from "@/components/helloWorldExample/index";
import LoopConditionExample from "@/components/loopConditionExample/index";
import EventExample from "@/components/eventExample/index";
import StringExample from "@/components/stringExample/index";
import GoogleMap from "@/components/googleMap/index";
import Admin from "@/components/admin/index";
import ListeProduit from "@/components/product/index";
import DetailProduit from "@/components/product/detail";
import ListeCategorie from "@/components/category/index";
import DetailCategorie from "@/components/category/detail";
import ShoppingCart from "@/components/shoppingCart/index";
import AddToCart from "@/components/shoppingCart/addToCart";
import Login from "@/components/login/index";
import Register from "@/components/login/register";
import Contact from "@/components/contact/index";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/helloworld",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/loopconditionexample",
      name: "loopconditionexample",
      component: LoopConditionExample
    },
    {
      path: "/eventexample",
      name: "eventexample",
      component: EventExample
    },
    {
      path: "/stringexample",
      name: "StringExample",
      component: StringExample
    },
    {
      path: "/googleMap",
      name: "GoogleMap",
      component: GoogleMap
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/admin",
      component: Admin,
      children: [
        {
          path: "",
          name: "Admin",
          component: ListeCategorie
        },
        {
          path: "categorie",
          name: "ListeCategorie",
          component: ListeCategorie
        },
        {
          path: "categorie/new",
          name: "NewCategorie",
          component: DetailCategorie
        },
        {
          path: "categorie/:id",
          name: "UpdateCategorie",
          component: DetailCategorie
        },
        {
          path: "produit",
          name: "ListeProduit",
          component: ListeProduit
        },
        {
          path: "produit/new",
          name: "DetailProduit",
          component: DetailProduit
        },
        {
          path: "produit/:id",
          name: "UpdateProduit",
          component: DetailProduit
        }
      ]
    },
    {
      path: "/shoppingcart",
      name: "ShoppingCart",
      component: ShoppingCart
    },
    {
      path: "/addtocart",
      name: "AddToCart",
      component: AddToCart
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
