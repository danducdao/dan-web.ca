<template>
    <div class="row">
        <div class="col-md-4">
            <div class="well" v-if="file.length > 0">
                <div class="parent">
                    <img v-bind:src="file" :height="largeur" :width="longeur" />
                    <button class="btn btn-danger"
                            :style="styleXRemove"
                            @click.prevent="removeImage">X
                    </button>
                </div>
            </div>
            <input type="hidden" name="file" :value="file" />
        </div>
    </div>
</template>

<script>
    import { bus } from '../app';
    const HEIGHT = 135, WIDTH = 192, NONE = 0;
    export default {
        props : {
            fileData : {
                type:String,
                required:true
            }
        },
        data() {
            return {
                uploadStatus:0,
                file:this.fileData,
                largeur:HEIGHT,
                longeur:WIDTH,
                styleXRemove : {
                    'position':'absolute',
                    'top':0,
                    'right':0,
                    'borderRadius':'10px',
                    'margin':'1px 2px 0px 0px',
                    'display' : 'inherit'
                }
            }
        },
        created(){
             bus.$on('UploadStatus',(uploadStatus) => {
                this.uploadStatus = uploadStatus;
             });
             bus.$on('FileToSave',(file) => {
                if(this.uploadStatus == 1)
                {
                    this.file = file;
                    this.styleXRemove.display = 'inherit';
                    this.largeur = HEIGHT;
                    this.longeur = WIDTH;
                }
             });
        },
        methods :{
            removeImage()
            {
                this.file = "";
                this.largeur = NONE;
                this.longeur = NONE;
                this.styleXRemove.display = 'none';
                this.uploadStatus = 0;
            }
        }
    }
</script>
<style scope>
  
</style>