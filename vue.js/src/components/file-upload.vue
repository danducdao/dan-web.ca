<template>
    <div>
        <form enctype="multipart/form-data" novalidate>
            <div class="dropbox">
                <input type="file"
                    :name="name" 
                    @change="filesChange($event.target.name, $event.target.files); 
                    fileCount = $event.target.files.length" accept="image/*" class="input-file">
                <p>Sélectionner le fichier<br>ou faire glisser le fichier pour télécharger</p>
            </div><br>
            <p v-if="errors.length > 0">
                <ul>
                    <li class="error" v-for="error in errors">{{error}}</li>
                </ul>
            </p>
        </form>
    </div>
</template>

<!-- Javascript -->
<script>
const STATUS_SUCCESS = 1, STATUS_FAILED = 0;
export default {
    name: 'fileUpload',
    data () {
        return {
            uploadError: null,
            currentStatus: 0,
            errors:[]
        }
    },
    props : {
            name :{
                type:String,
                required:true
            },
            maxFiles :{
                type:String,
                required:true
            },
            maxSize : {
                type:String,
                required:true
            },
            fileExt : {
                type:String,
                required:true
            }
    },

    methods: {

        filesChange(fieldName, fileList) 
        {
            this.errors = [];
        
            if(fileList.length > 0 && !this.isValidFileExtension(fileList,this.errors))
            {
                this.$emit('UploadStatus',STATUS_FAILED);
                return;
            }
            
            if(fileList.length > 0)
            {
                var reader = new FileReader();
                reader.readAsDataURL(fileList[0]);
                var that = this;
                reader.onload = function () {
                    that.$emit('UploadStatus',STATUS_SUCCESS);
                    that.$emit('FileToSave',reader.result);
                };
                reader.onerror = function (error) {
                    that.$emit('UploadStatus',STATUS_FAILED);
                    console.log('Erreur: ', error);
                };
            }
        },
        isValidFileExtension(files,errors)
        {
            var extensions = (this.fileExt.split(',')).map(function (x) { return x.toLocaleUpperCase().trim() });
            for (var i = 0; i < files.length; i++) 
            {
                var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
                var exists = extensions.includes(ext);

                if (!exists) {
                    errors.push("Erreur (Extension): " + files[i].name);
                }
                this.isValidFileSize(files[i],errors);
            }
            return errors.length > 0?false:true;
        },
        isValidFileSize(file,errors)
        {
            var fileSizeinMB = file.size / (1024 * 1000);
            var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
            if (size > this.maxSize)
                errors.push("Erreur (Taille Fichier): " + file.name + ": dépasser la limite de taille de fichier " + this.maxSize + "MB ( " + size + "MB )");
        }
    }
    
}
</script>

<!-- SASS styling -->
<style>
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
</style>