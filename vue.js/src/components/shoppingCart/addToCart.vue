<template>
    <section>
      <div class="content">
        <div class="row">
          <div class="col-lg-9">
            <div class="hpanel">
                <div class="panel-heading hbuilt"><strong>Votre panier</strong></div>
                <div class="panel-body">
                    <div v-if="carts.length > 0">
                        <table class="table table-bordered" role="grid">
                            <thead>
                                <tr>
                                    <th v-for="(header,key) in ['Nom','Quantité','Prix','Total','']" 
                                        v-bind:key="key" 
                                        :style="{textAlign:'center'}">{{header}}</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(cart,key) in carts" v-bind:key="key">
                                    <td >{{cart.nom}}</td>
                                    <td :style="{width:'10%',textAlign:'right'}">
                                      <input type="text" :id="cart.id" size="3" :value="cart.quantite">
                                    </td>
                                    <td :style="{width:'10%',textAlign:'right'}">{{ cart.prix | currency }}</td>
                                    <td :style="{width:'20%',textAlign:'right'}">{{ cart.total | currency }}</td>
                                    <td :style="{width:'20%'}">
                                        <button type="submit" class="btn btn-success" @click="updateCart(cart.id)">Modifier</button>&nbsp;
                                        <button type="submit" class="btn btn-danger" @click="removeCart(cart.id)">Supprimer</button>
                                    </td>
                            </tr>
                            <tr>
                                  <td colspan="3"></td>
                                  <td>
                                      <table class="table table-border">
                                          <tr>
                                              <td><strong>Total:</strong></td>
                                              <td :style="{textAlign:'right'}"><strong>{{ Total() | currency}}</strong></td>
                                          </tr>
                                          <tr>
                                              <td><strong>TPS({{TPS}}%):</strong></td>
                                              <td :style="{textAlign:'right'}"><strong>{{ TaxeTPS() | currency}}</strong></td>
                                          </tr>
                                          <tr>
                                              <td><strong>TVQ({{TVQ}}%):</strong></td>
                                              <td :style="{textAlign:'right'}"><strong>{{ TaxeTVQ() | currency}}</strong></td>
                                          </tr>
                                          <tr>
                                              <td><strong>Grande Total:</strong></td>
                                              <td :style="{textAlign:'right'}"><strong>{{ GrandeTotal() | currency}}</strong></td>
                                          </tr>
                                        </table>
                                  </td>
                            </tr>       
                            </tbody>
                        </table>
                    </div>
                    <div v-else>Votre panier est vide</div>
                </div>
            </div>  
            <div>
                <router-link :to="{ path: '/shoppingcart'}" append class="btn btn-info">
                    <i class="fa fa-backward" :style="{fontSize:'24px',float:'left'}"></i>
                    <span :style="{marginLeft:'5px',fontWeight:'bold',fontSize:'18px'}">Continue magasiner</span>
                </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { LocalStorage } from "../../classes/localstorage";

export default {
  data() {
    return {
      carts: [],
      localStorage: new LocalStorage(),
      TPS: 9.15,
      TVQ: 7.13
    };
  },
  created() {
    this.carts = this.localStorage.getItem("carts");
  },
  methods: {
    calcTotal() {
      var total = 0;
      var len = this.carts.length;
      for (var i = 0; i < len; i++) {
        total += parseFloat(this.carts[i].total);
      }
      return total;
    },
    TaxeTPS() {
      return parseFloat((this.calcTotal() * this.TPS) / 100).toFixed(2);
    },
    TaxeTVQ() {
      return parseFloat((this.calcTotal() * this.TVQ) / 100).toFixed(2);
    },
    Total() {
      return this.calcTotal();
    },
    GrandeTotal() {
      return (
        parseFloat(this.calcTotal()) +
        parseFloat(this.TaxeTPS()) +
        parseFloat(this.TaxeTVQ())
      );
    },
    updateCart(cartId) {
      let input = document.getElementById(cartId);
      let quantite = input.value;
      if (quantite === "") {
        alert("La quantité est obligatoire");
        input.focus();
        return;
      }
      if (!quantite.match(/^[1-9][0-9]*$/)) {
        alert("La quantité doit être digit et ne contient pas de zéro");
        input.value = "";
        input.focus();
        return;
      }
      quantite = parseInt(quantite);
      this.carts.map(function(value) {
        if (value.id === parseInt(cartId)) {
          value.quantite = quantite;
          value.total = parseFloat(value.prix * value.quantite);
          return value;
        }
      });
      this.localStorage.setItem("carts", this.carts);
    },
    removeCart(cartId) {
      if (confirm("Êtes-vous sûre de vouloir supprimer ce item?")) {
        this.carts = this.carts.filter(data => data.id.indexOf(cartId) == -1);
        this.localStorage.setItem("carts", this.carts);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
