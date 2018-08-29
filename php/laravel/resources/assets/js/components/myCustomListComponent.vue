<template>
        <table class="table table-bordered" cellspacing="1" cellpadding="1">
            <thead>
                <tr>
                    <th></th>
                    <template v-for="(headers,key) in this.data">
                        <template v-if="key === 0" v-for="header in Object.keys(headers)">
                            <th v-if="header !== 'id'" style="text-align:center;vertical-align:top;">{{ header }}</th>
                        </template>  
                    </template> 
                </tr>
            </thead>
            <tbody>
                <template v-for="bodies in this.data">
                    <tr>
                        <td><a href="#" @click.prevent="removeItem(bodies['id'])">supprimer</a></td>
                        <td><a href="#" @click.prevent="redirect(bodies['id'])">modifier</a></td>
                        <template v-for="(body,key) in Object.values(bodies)">
                            <template v-if="key === activecol">
                            <td :style="mystyle[key]?mystyle[key]:''" >
                                <span v-if='body == 1'><i class='fa fa-check-square'></i></span>
                            </td>
                            </template>
                            <template v-else-if="key !== 0">
                                <td :style="mystyle[key]?mystyle[key]:''" >{{ body }}</td>
                            </template>
                        </template>
                    </tr>
                </template>
            </tbody>
        </table>
 
</template>

<script>
    import VueResource from "vue-resource";
    Vue.use(VueResource);
    export default {
        props: ['data', 'mystyle','url','activecol'],
        methods:{
            removeItem(id)
            {
                 if (confirm("Êtes-vous sûre de vouloir supprimer cet item?")) {
                     console.log('http://localhost:4000/' + this.url + '/' + id);
                     Vue.http.put('http://localhost:4000/' + this.url + '/' + id).then(res => {
                            if(res.body.success)
                            {
                                alert('Cet item a été sauvegardé avec succès');
                                window.location.href=this.url;
                            }else{
                                alert('Cet item a été sauvegardé avec sans succès')
                            }  
                        });
            
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
