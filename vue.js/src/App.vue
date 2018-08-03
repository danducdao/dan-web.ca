<template>
  <div id="app">
    <div id="header">
     <div class="color-line"></div>
         <div id="logo" class="light-version">
             <span>
                  Dan Duc Dao
             </span>
         </div>
         <nav role="navigation">
             <div class="header-link hide-menu" style="height:55px;"><i class="fa fa-bars"></i></div>
             <div class="small-logo">
                 <span class="text-primary">Dan Duc Dao</span>
             </div>
         </nav>
     </div>
     <aside id="menu">
     	<div id="navigation">
     			<div class="profile-picture">
     							<img src="./assets/images/av1.png" class="img-circle m-b" alt="logo" />
     			</div>
     			<ul class="nav" id="side-menu">
     					<li>
     						<router-link to="/">Home</router-link>
     					</li>
     					<li>
                            <a href="#"><span class="nav-label">Vue.js</span><span class="fa arrow"></span> </a>
                            <ul class="nav nav-second-level">
                                <li><router-link to="/first-program">Premier program</router-link></li>
                                <li><router-link to="/loop-program">v-for</router-link></li>
                                <li><router-link to="/event-program">event</router-link></li>
                                <li><router-link to="/string-program">String</router-link></li>
                                <li><router-link to="/googleMap">Google Map</router-link></li>
                                <li><router-link to="/admin">Admin</router-link></li>
                                <li><router-link to="/shoppingcart">Shopping Cart</router-link></li>
                                <li><router-link to="/login">Login</router-link></li>
                                <li><router-link to="/contact">Contact</router-link></li>
                            </ul>
     					</li>
                         
     			</ul>
     	</div>
     </aside>
     <div id="wrapper">
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                    <div class="panel-body">
                         <router-view/>
                    </div>
                </div>
            </div>
        </div>
     </div>
  </div>
</template>
<script>
import "@/assets/js/jquery/dist/jquery.min.js";
import "@/assets/js/jquery-ui/jquery-ui.min.js";
import "@/assets/js/slimScroll/jquery.slimscroll.min.js";
import "@/assets/js/bootstrap/dist/js/bootstrap.min.js";
import "@/assets/js/metisMenu/dist/metisMenu.min.js";
import "@/assets/js/peity/jquery.peity.min.js";
import "@/assets/js/nestable/jquery.nestable.js";
import "@/assets/js/sparkline/index.js";
import "@/assets/js/bootstrap-tour/build/js/bootstrap-tour.min.js";
import "@/assets/js/homer.js";

export default {
  name: "App"
};
</script>

<style>
@import "./assets/css/fontawesome/css/font-awesome.css";
@import "./assets/css/metisMenu/dist/metisMenu.css";
@import "./assets/css/animate.css/animate.css";
@import "./assets/css/bootstrap/dist/css/bootstrap.css";
@import "./assets/css/sweetalert/lib/sweet-alert.css";
@import "./assets/css/toastr/build/toastr.min.css";
@import "./assets/css/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css";
@import "./assets/css/fonts/pe-icon-7-stroke/css/helper.css";
@import "./assets/css/styles/style.css";
@import "./assets/css/styles/static_custom.css";
@import "./assets/css/styles/styles.css";
</style>
