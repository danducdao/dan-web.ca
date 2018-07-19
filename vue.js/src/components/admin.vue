<template>
    <div>
        <article>
            <ul>
                <li><a v-bind:class="category" id="category" v-on:click="redirect($event)">Catégories</a></li>
                <li><a v-bind:class="product" id="product" v-on:click="redirect($event)">Produits</a></li>
            </ul>
            <router-view></router-view>
        </article>
    </div>
</template>

<script>
export default {
  name: 'Admin',
    data () {
        return {
            category : { active : true},
            product : { active : false} 
        }
    },
    methods : {
         redirect(event)
        {
            if(event.target.id == "category")
            {
                this.category.active=true;
                this.product.active= !this.category.active;
                this.$router.push('/admin/categorie');
            }else if(event.target.id == "product")
            {
                this.product.active=true;
                this.category.active = !this.product.active;
                this.$router.push('/admin/produit');
            }
        }
    }
}
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

.active{
    background-color:black;
}
</style>
