<template>
     <div :class="divClass">
        <label :for="textareaName" :class="labelClass">{{labelText}}</label>
        <span v-if="spanError" style="color:red;">*</span>
        <textarea :name="textareaName" 
                  :id="textareaId" 
                  :cols="textareaCols" 
                  :rows="textareaRows" 
                  :class="textareaClass" v-text="textareaText" />
         <span v-if="spanErrorMessage.length > 0" style="color:red;">{{spanErrorMessage}}</span>        
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
            textareaName : {
                type:String,
                required:true
            },
            textareaId : {
                type:String,
                required:false
            },
            textareaText : {
                type:String,
                required:false
            },
            textareaCols : {
                type:String,
                required:false
            },
            textareaRows : {
                type:String,
                required:false
            },
            textareaClass : {
                type:String,
                required:false
            },
            spanError : {
                type : Boolean,
                required:false
            },
            spanErrorMessage:{
                type : String,
                required:false
            }
        }
    }
</script>
<style scope>

</style>
