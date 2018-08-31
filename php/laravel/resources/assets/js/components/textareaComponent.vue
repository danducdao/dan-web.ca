<template>
     <div :class="divClass">
        <label :for="mytxtName" :class="labelClass">{{labelText}}</label>
        <textarea :name="textareaName" 
                  :id="textareaId" 
                  :cols="textareaCols" 
                  :rows="textareaRows" 
                  :class="textareaClass" v-text="textareaText">
            
        </textarea>
    </div>   
</template>

<script>
    export default {
        props: {
            'divClass' : {
                type:String,
                required:false
            },
            'labelClass' : {
                type:String,
                required:false
            },
            'labelText' : {
                type:String,
                required:true
            },
            'textareaName' : {
                type:String,
                required:true
            },
            'textareaId' : {
                type:String,
                required:false
            },
            'textareaText' : {
                type:String,
                required:true
            },
            'textareaCols' : {
                type:String,
                required:false
            },
            'textareaRows' : {
                type:String,
                required:false
            },
            'textareaClass' : {
                type:String,
                required:false
            }
        }
    }
</script>
<style scope>

</style>
