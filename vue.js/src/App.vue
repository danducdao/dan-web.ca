<template>
<div>
<!-- Header -->
<div id="header">
    <div class="color-line">
    </div>
    <div id="logo" class="light-version">
        <span>
            Exemple - Vue.js
        </span>
    </div>
    <nav role="navigation">
        <div class="header-link hide-menu"><i class="fa fa-bars"></i></div>
        <div class="small-logo">
            <span class="text-primary">Exemple - Vue.js</span>
        </div>
    </nav>
</div>

<!-- Navigation -->
<aside id="menu">
    <div id="navigation">
        <div class="profile-picture">
            <a href="index.html">
               <img src="./assets/images/av1.png" class="img-circle m-b" alt="logo" />
            </a>
        </div>
        <ul class="nav" id="side-menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/helloworld">Hello world</router-link>
            </li>
            <li>
                <router-link to="/loopconditionexample">v-for</router-link>
            </li>
            <li>
                <router-link to="/eventexample">event</router-link>
            </li>
            <li>
                <router-link to="/stringexample">String</router-link>
            </li>
            <li>
                <router-link to="/googleMap">Google Map</router-link>
            </li>
            <li>
                <router-link to="/admin">Admin</router-link>
            </li>
            <li>
                <router-link to="/shoppingcart">Shopping Cart</router-link>
            </li>
            <li>
                <router-link to="/login">Login</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </div>
</aside>

<!-- Main Wrapper -->
<div id="wrapper">

<div class="p-lg">
    <div class="content" data-child="row">
        <router-view/>    
    </div>
</div>
<!-- Footer-->
<footer class="footer">
    <span class="pull-right">
        Exemple - Vue.js
    </span>
    Exemple - Vue.js 2018-2020
</footer>

</div>
</div>
</template>
<script>
import "@/assets/js/vendor/jquery/dist/jquery.min.js";
import "@/assets/js/vendor/jquery-ui/jquery-ui.min.js";
import "@/assets/js/vendor/slimScroll/jquery.slimscroll.min.js";
import "@/assets/js/vendor/bootstrap/dist/js/bootstrap.min.js";
import "@/assets/js/vendor/metisMenu/dist/metisMenu.min.js";
import "@/assets/js/vendor/sparkline/index.js";
import "@/assets/js/vendor/homer.js";

export default {
  name: "App"
};
</script>

<style>
@import "./assets/css/vendor/fontawesome/css/font-awesome.css";
@import "./assets/css/vendor/metisMenu/dist/metisMenu.css";
@import "./assets/css/vendor/animate.css/animate.css";
@import "./assets/css/vendor/bootstrap/dist/css/bootstrap.css";
@import "./assets/css/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css";
@import "./assets/css/fonts/pe-icon-7-stroke/css/helper.css";
@import "./assets/css/styles/style.css";
</style>
