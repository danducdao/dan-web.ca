<template>
    <div :class="divClass">
        <label :for="selectOptName" :class="labelClass">{{labelText}}</label>
        <span v-if="spanError" style="color:red;">*</span>
        <div class="input-group m-b">
            <select :name="selectOptName" :class="selectOptClass" v-model="selectOptItem">
                <option :disabled="spanError" value="">--Sélectionner--</option>
                <option v-for="selectOpt in selectOptItems" :value="selectOpt.id" >{{selectOpt.nom}}</option>
            </select>
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
            selectOptClass:{
                type:String,
                required:false
            },
            selectOptName:{
                type:String,
                required:true
            },
            selectOptItems:{
                type:Array,
                required:true
            },
            selectOptItem :{
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
        }
    }
</script>
<style scoped>
</style>