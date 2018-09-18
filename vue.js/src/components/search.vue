<template>
    <form class="form-horizontal">
        <div class="row">
            <div class="hpanel col-md-12">
                <div class="panel-body">
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="search" style="padding-left:0px;">{{name}}</label>
                        <div class="col-sm-8">
                            <input type="search" class="form-control" id="search" @input="search(items)">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="checkbox" style="margin-left:11px;">
                            <span v-for="checkbox in checkboxContainer">
                                <div :class="checkbox.clsAttribut" style="position: relative;" @click="checkbox.selectedItem()">
                                    <input type="checkbox" :name="checkbox.name" style="position: absolute; opacity: 0;" :value="checkbox.value">
                                    <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                </div>&nbsp;{{checkbox.text}}&nbsp;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>

import { CheckBox } from "../classes/checkBox";

export default {
  data() {
    return {
        checkboxContainer : []
    };
  },
  props:{
      name:{
          type:String,
          required:true
      },
      searchCriteria : {
           type:Array,
           required:true
      },
      items:{
          type:Array,
          required:true
      }
  },
  created(){
       this.searchCriteria.forEach(function(res){
           this.checkboxContainer.push(new CheckBox(res.name, 
                                                    res.value,
                                                    res.text,
                                                    res.colType,
                                                    res.checked));
       }.bind(this));
  },
  methods:{
      search(items)
      {
          let data = [];
          let searchValue = document.getElementById("search").value;
          this.checkboxContainer.forEach(function(res){
              if(res.clsAttribut.indexOf("checked") !== -1)
              {
                  if(res.colType === "string")
                  {
                     data = data.concat(items.filter(value => value[res.name]
                                                              .toLowerCase()
                                                              .indexOf(searchValue.toLowerCase()) !== -1));
                  }else if(res.colType === "number")
                  {
                     data = data.concat(items.filter(value => parseFloat(value[res.name]) ===  parseFloat(searchValue)));
                  }
              }
          }.bind(this));
          this.$emit('refreshItems',data);
      }
  } 
};
</script>
<style scoped>
</style>
