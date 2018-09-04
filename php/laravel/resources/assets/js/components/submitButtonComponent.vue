<template>
    <button type="submit" name="ok" class="btn btn-success">
        <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
        <span style="margin-left:5px;font-weight:bold;font-size:18px;" v-text="buttonText"></span>
    </button>   
</template>
<script>
    export default { 
        props:{
            buttonText:{
                type:String,
                require:true
            }
        }
    }
</script>
<style scope>
</style>
