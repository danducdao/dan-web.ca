<template>
    <div :class="divClass">
        <label :class="labelClass"><strong>{{labelText}}</strong></label>
        <span v-if="spanError" style="color:red;">*</span>
        <div class="input-group m-b">
            <div class="custom-select" id="custom-select" @click="toggleVisible" v-text="selectedItem"></div>
            <div id="custom-select-option-box" v-show="visible">
                <div class="custom-select-option" v-for="selectOpt in selectOptItems">
                    <label :for="selectOpt.id">
                        <input @change="itemChanged"
                            class="custom-select-option-checkbox" 
                            type="checkbox"
                            :name="selectOpt.id" 
                            :id="selectOpt.id" 
                            :value="selectOpt.nom" 
                            :checked="selectedItem.split(',').includes(selectOpt.nom)?'checked':''">&nbsp;{{selectOpt.nom}}
                    </label>
                </div>
                <input type="hidden" :name="selectOptName" :value="selectedItem" />
            </div>
            <span v-if="spanErrorMessage" style="color:red;">*</span>
        </div>
    </div>
</template>

<script>
   export default {
    props: {
            divClass : {
                type:String,
                required:false
            },
            labelClass : {
                type:String,
                required:false
            },
            labelText : {
                type:String,
                required:true
            },
            selectOptItems:{
                type:Array,
                required:true
            },
            selectOptItem:{
                type:String,
                required:true
            },
            selectOptName:{
                type:String,
                required:true
            },
            spanError : {
                type:Boolean,
                required:false
            },
            spanErrorMessage:{
                type:String,
                required:false
            }
        },
        data(){
            return {
                visible:false,
                selectedItem:this.selectOptItem !== ""?this.selectOptItem:"---Sélectionner--"
            }
        },
        created(){
            console.log('xxxx')
            console.log(this.selectOptItem);
            console.log(this.selectedItem.split(','));
        },
        methods:{
            toggleVisible(){
                this.visible = !this.visible;
            },
            itemChanged(event){
                let checkbox = event.target;
                if(this.selectedItem.indexOf('Sélectionner') !== -1)
                {
                    this.selectedItem = checkbox.value;
                }else{
                    if(checkbox.checked){
                        this.selectedItem += "," + checkbox.value;
                    }else{
                        let selectedValues = this.selectedItem.split(",");
                        selectedValues = selectedValues.filter(text => text.indexOf(checkbox.value) === -1);
                        if(selectedValues.length === 0){
                            this.selectedItem = "--Sélectionner--";
                        }else{
                            this.selectedItem = selectedValues.join();
                        }
                    }
                    console.log(this.selectedItem);
                }
            }
        }
    }
</script>
<style scoped>

.custom-select {
    background: #FFF url('../../../assets/images/downward-arrow.png') no-repeat center right 2px;
    display: inline-block;
    padding: 5px 15px;
    border: #e4e5e7 1px solid;
    color: #555;
    border-radius: 2px;
    width: 300px;
    cursor:pointer;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap; 
}
div#custom-select-option-box {
    background: #FFF;
    border: #e4e5e7 1px solid;
    color: #555;
    border-radius: 2px;
    width: 300px;
    z-index:1;
    margin-top:-3px;
}
.custom-select-option {
    width: 100%;
    padding: 0px 15px;
    margin: 1px 0px;
    cursor: pointer;
}
label{
    cursor: pointer;
    font-weight:normal;
}

</style>