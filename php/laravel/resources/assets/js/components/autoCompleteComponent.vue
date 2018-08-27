<template>
    <div class="autocomplete">
       <div class="input" @click="toggleVisible" v-text="selectedItem[1]" />
       <input type="hidden" :name="name" :value="selectedItem[0]">
       <div class="mypopover" v-show="visible">
            <input type="text" v-model="query">
            <div class="options">
                <ul>
                    <li :class="{'selected': (selected === index)}" 
                        v-for="(match,index) in matches" 
                        @click="itemClicked(index)" 
                        v-text="match[1]" />
                </ul>
            </div>
        </div>  
    </div>
</template>

<script>
    export default {
        props : ['items','name'],
        data(){
            return {
                selectedItem:"",
                selectedItemId:"",
                visible:false,
                query:"",
                selected:null
            };
        },
        methods:{
            toggleVisible()
            {
                this.visible = !this.visible;
            },
            itemClicked(index)
            {
               this.selected = index;
               this.selectedItem = this.matches[index];
               this.visible = !this.visible;
            }
        },
        computed : {
             matches()
             {
                if(this.query == "")
                    return [];  

                return Object.entries(this.items)
                             .filter(value => value[1].toLowerCase().indexOf(this.query.toLowerCase()) !== -1);      
            }     
        }
    }
</script>
<style scope>
  
</style>
