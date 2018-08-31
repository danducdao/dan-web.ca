<template>
    <div>
        <span v-for="(radioButton,index) in containerRadioButton">
            <div :class="radioButton.ClsAttribut" style="position: relative;" @click.prevent="selectedItem(index)">
                <input type="radio" :name="radioButton.Name" style="position: absolute; opacity: 0;" :checked="radioButton.Checked" :value="radioButton.Value">
                <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
            </div>&nbsp;{{radioButton.Text}}&nbsp;
        </span>
    </div>
</template>

<script>

    import { RadioButton } from '../classes/radioButton';

    export default {
        props : ['attributs'],
        data(){
            return {
                containerRadioButton:[]
            }
        },
        created(){
            let attributs = this.attributs;
            for(let i=0;i < attributs.length;i++ )
            {
                this.containerRadioButton.push(new RadioButton(attributs[i].name, attributs[i].value, attributs[i].text, attributs[i].checked));   
            }
        },
        methods : {
            selectedItem(index) 
            {
                this.initActiveRadioButton();
                let containerRadioButton =this.containerRadioButton;
                containerRadioButton[index].ClsAttribut = containerRadioButton[index].iradioButtonSquare;
                containerRadioButton[index].Checked = "checked";
            },
            initActiveRadioButton() {
                for (let radioButton of this.containerRadioButton) {
                    radioButton.clsAttribut = radioButton.iradioButtonSquare.split(" ")[0];
                     radioButton.Checked = "";
                }
            }
        }
        
    }
</script>
<style scope>
  
</style>
