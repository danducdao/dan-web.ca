<template>
    <section id="admin-container">
         <ul>
            <router-link to="/admin/categorie" tag="li" active-class="active"><a>Catégories</a></router-link>
            <li><router-link to="/admin/produit" tag="li" active-class="active"><a>Produits</a></router-link></li>
        </ul>
        <router-view></router-view>
    </section>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0 0 20px 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

.active {
  background-color: black;
}
</style>
