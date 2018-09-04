<template>
    <button name="back" class="btn btn-success" @click.prevent="redirect">
        <i class="fa fa-backward" style="font-size:24px;float:left;"></i>
        <span style="margin-left:5px;font-weight:bold;font-size:18px;" v-text="buttonText"></span>
    </button>
</template>

<script>
    export default { 
        props:{
            buttonText: {
                type:String,
                require:true
            },
            redirectUrl:{
                type:String,
                required:true
            }
        },
        methods:{
            redirect(){
                window.location.href = this.redirectUrl;
            }
        }
    }
</script>
<style scope>
</style>
