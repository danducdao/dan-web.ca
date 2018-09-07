<template>
    <div :class="divClass" @mouseleave="close">
        <label :class="labelClass"><strong>{{labelText}}</strong></label>
        <span v-if="spanError" style="color:red;">*</span>
        <div class="input-group m-b">
            <div class="custom-select" id="custom-select" @click="toggleVisible" v-text="divValue.length > 0?divValue.join(','):'---Sélectionner--'"></div>
            <div id="custom-select-option-box" v-show="visible">
                <div class="custom-select-option" v-for="selectOpt in selectOptItems">
                    <label :for="selectOpt.id">
                        <input @change="itemChanged($event,selectOpt.id)"
                            class="custom-select-option-checkbox" 
                            type="checkbox"
                            :name="selectOpt.id" 
                            :id="selectOpt.id" 
                            :value="selectOpt.nom" 
                            :checked="inputValue.includes(selectOpt.id)?'checked':''">&nbsp;{{selectOpt.nom}}
                    </label>
                </div>
                <input type="hidden" :name="selectOptName" :value="inputValue.length > 0?inputValue.join(','):''" />
            </div>
            <span v-if="spanErrorMessage" style="color:red;" v-text="spanErrorMessage" />
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
                divValue:[],
                inputValue:[]
            }
        },
        created(){
            let selectOptItem = this.selectOptItem;
            let ids = selectOptItem?selectOptItem.split(','):"";
            if(ids)
            {
                for(let i = 0;i <ids.length;i++ )
                {
                    let item = this.selectOptItems.filter(res => typeof(res.id) !== "string"?res.id === parseInt(ids[i]): res.id.indexOf("3") !== -1)[0];
                    this.divValue[i] = item.nom;
                    this.inputValue[i] = item.id;
                }
            }
        },
        methods:{
            toggleVisible(){
                this.visible = !this.visible;
            },
            itemChanged(event,id){
                var item = this.selectOptItems.filter(res => typeof(res.id) !== "string"?res.id === parseInt(id):res.id.indexOf(id) !== -1)[0];
                if(event.target.checked)
                {
                    let len = this.inputValue.length === 0?0:this.inputValue.length;
                    this.inputValue[len] = id;
                    this.divValue[len] = item.nom;
                }else{
                    this.inputValue = this.inputValue.filter(id => typeof(id) !== "string"?id !== parseInt(item.id):id.indexOf(item.id) === -1);
                    this.divValue =  this.divValue.filter(nom => typeof(nom) !== "string"?nom !== parseInt(item.nom):nom.indexOf(item.nom) === -1);
                }
            },
            close(){
                this.visible=false;
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
    max-height:100px;
    overflow-y:scroll;
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