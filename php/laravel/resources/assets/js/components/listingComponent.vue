<template>
        <table class="table table-bordered" cellspacing="1" cellpadding="1" :style="tableStyle">
            <thead>
                <tr>
                    <th style="width:20px;"></th>
                    <th style="width:20px;"></th>
                    <template v-for="(items,key) in data" v-if="key === 0">
                        <th v-for="(item,index) in items" v-if="index !== 'id'">
                            {{index}}
                        </th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <template v-for="items in data">
                    <tr>
                        <td><a v-if="items['Active'] === 1" href="#" @click.prevent="removeItem(items['id'])">supprimer</a></td>
                        <td><a href="#" @click.prevent="redirect(items['id'])">modifier</a></td>
                        <td v-for="(item,key) in items" v-if="key !== 'id'" :style="itemStyle[key]">
                           <span v-if="key === 'Image'" v-html="'<img src=' + items[key]"></span>
                           <span v-else v-html="items[key]"></span>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
</template>

<script>
    import VueResource from "vue-resource";
    Vue.use(VueResource);
    export default {
        props: {
            data:{
                type:Array,
                required:true
            },
            itemStyle:{
                type:Object,
                required:false
            },
            tableStyle:{
                type:String,
                required:false
            },
            url:{
                type:String,
                required:true
            } 
        },
        methods:{
            removeItem(id)
            {
                 if (confirm("Êtes-vous sûre de vouloir supprimer cet item?")) 
                 {
                     Vue.http.put('http://localhost:4000/' + this.url + '/' + id).then(res => {
                            if(res.body.success)
                            {
                                alert('Cet item a été sauvegardé avec succès');
                                window.location.href=this.url;
                            }else{
                                alert('Cet item a été sauvegardé avec sans succès')
                            }  
                        },
                        err => console.log(err));
                 }
            },
            redirect(id)
            {
                window.location.href= this.url + '/' + id + "/edit";
            }
        }
    }
</script>
<style scope>
  
</style>
