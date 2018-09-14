<template>
    <div class="content">
        <div class="row">
            <div class="hpanel hblue col-md-6">
                  <div class="panel-heading hbuilt"><strong>Event</strong></div>
                  <div class="panel-body">
                      <div id="canvas" v-on:mousemove="updateXY">{{x}},{{y}}</div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        x:0,
        y:0
    }
  },
  methods:{
      updateXY(event){
          this.x = event.offsetX;
          this.y = event.offsetY;
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #canvas{
        width:600px;
        padding:200px 20px;
        text-align:center;
        border:1px solid #333;
    }
</style>
