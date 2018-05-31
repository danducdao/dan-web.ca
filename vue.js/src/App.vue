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
             <div class="header-link hide-menu"><i class="fa fa-bars"></i></div>
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
     						<a routerLink="/">Home</a>
     					</li>
     					<li>
     							<a href="#"><span class="nav-label">Vue.js</span><span class="fa arrow"></span> </a>
     							<ul class="nav nav-second-level">
     									 <li><router-link to="/first-program">Premier program</router-link></li>
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
export default {
  name: 'App'
}
</script>

<style>

</style>
