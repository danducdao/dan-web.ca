/*
* Program : Routing
* Écrit par : Dan Duc Dao
*/

import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import FirstProgram from '@/components/first-program';
import LoopProgram from '@/components/loop-program';
import EventProgram from '@/components/event-program';
import StringProgram from '@/components/string-program';
import GoogleMap from '@/components/google-map';
import Admin from '@/components/admin';
import ListeProduit from '@/components/produit/liste';
import DetailProduit from '@/components/produit/detail';
import ListeCategorie from '@/components/categorie/liste';
import DetailCategorie from '@/components/categorie/detail';
import ShoppingCart from '@/components/shoppingCart/shoppingCart';
import AddToCart from '@/components/shoppingCart/addToCart';
import Login from '@/components/login/login';
import Register from '@/components/login/register';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
       path: '/first-program',
       name: 'FirstProgram',
       component: FirstProgram
    },
    {
       path : '/loop-program',
       name : 'Loop',
       component : LoopProgram
    },
    {
       path : '/event-program',
       name : 'Event',
       component : EventProgram
    },
    {
        path : '/string-program',
        name : 'StringProgram',
        component : StringProgram
    },{
        path : '/googleMap',
        name : 'GoogleMap',
        component : GoogleMap
    },{
        path: '/',
        name: 'Home',
        component: Home
    },{
        path : '/admin',
        name: 'Admin',
        component : Admin,
        children: [
            {
                  path : '',
                  name : 'AdminListeCategorie',
                  component : ListeCategorie
            },{
                  path : 'categorie',
                  name : 'ListeCategorie',
                  component : ListeCategorie
            },{
                  path : 'categorie/new',
                  name : 'NewCategorie',
                  component : DetailCategorie
            },{
                  path : 'categorie/:id',
                  name : 'UpdateCategorie',
                  component : DetailCategorie
            },{
                  path : 'produit',
                  name : 'ListeProduit',
                  component : ListeProduit
            },{
                  path : 'produit/new',
                  name : 'ListeProduit',
                  component : DetailProduit
            },{
                  path : 'produit/:id',
                  name : 'UpdateProduit',
                  component : DetailProduit
             } 
        ]
    },{
          path : '/shoppingcart',
          name : 'ShoppingCart',
          component : ShoppingCart
      },{
          path : '/addtocart',
          name : 'AddToCart',
          component : AddToCart 
      },{
          path : '/login',
          name : 'Login',
          component : Login
      },{
          path : '/register',
          name : 'register',
          component : Register
      }

  ]
})
