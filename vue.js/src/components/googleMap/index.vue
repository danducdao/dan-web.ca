<template>
    <section>
      <div class="content">
        <div class="row">
            <div class="hpanel hblue col-md-3">
                <div class="panel-heading hbuilt"><strong>Sélection</strong></div>
                <div class="panel-body">
                    <label class="control-label">Ville</label>
                    <select class="form-control" v-model="id" v-on:change="afficherGoogleMap">
                    <template v-for="(pays,key) in listPays">
                        <optgroup  v-bind:label="pays.nom" :key="key">
                            <template  v-for="(ville,key) in filtrerParPays(pays.nom)">
                                <option :value="ville._id" :key="key">{{ville.ville + "," + ville.province}}</option>
                            </template>
                        </optgroup>
                    </template>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <gmap-map
                    :center="center"
                    :zoom="12"
                    :style="{width:'100%',height:'400px'}"
                    >
                        <gmap-marker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            @click="center=m.position"
                        ></gmap-marker>
                </gmap-map>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
import { GoogleMapService } from "../../services/googleMap";

export default {
  name: "GoogleMap",
  data() {
    return {
      listPays: [],
      listVilles: [],
      id: "",
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      googleMapService: new GoogleMapService(this.$http)
    };
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat,
          lng: this.currentPlace.geometry.location.lng
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    filtrerParPays: function(pays) {
      return this.listVilles.filter(function(value) {
        return value.pays.match(pays);
      });
    },
    afficherGoogleMap: function() {
      var _id = this.id;
      var ville = this.listVilles.filter(function(value) {
        return value._id === _id;
      });
      var coord = ville[0].coord;
      var obj = {
        geometry: {
          location: {
            lat: coord.lat,
            lng: coord.lon
          }
        }
      };
      this.setPlace(obj);
      this.addMarker();
    }
  },
  created() {
    this.googleMapService.getGoogleMapVilles().then(
      function(data) {
        this.listVilles = data.body;
        for (var i = 0; i < this.listVilles.length; i++) {
          var pays = new Object();
          pays.id = this.listVilles[i]._id;
          pays.nom = this.listVilles[i].pays;
          if (this.listPays.length === 0) {
            this.listPays.push(pays);
          } else {
            var paysTrouve = this.listPays.filter(function(data) {
              return data.nom.indexOf(pays.nom) !== -1;
            });
            if (paysTrouve.length == 0) {
              this.listPays.push(pays);
            }
          }
        }
      }.bind(this)
    );
  },
  mounted() {
    this.geolocate();
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>