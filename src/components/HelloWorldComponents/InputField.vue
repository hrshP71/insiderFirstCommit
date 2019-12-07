<template>
  <fieldset>
      <label :for="input">{{whatFor}}</label>
      <input @blur="blurred" type="text" name="" v-model="input">
  </fieldset>
</template>

<script>
import store from '../../store/index';
export default {
    data(){
        return{
            input: '',
        }
    },
    props:{
        whatFor:{
            type: String,
            default: 'Name',
            required: false,
        }
    },
    methods: {
        blurred(){
        let role = this.whatFor;
        let updatePath = 'update' + role;
        console.log(updatePath)
        this.$store.commit( updatePath , this.input);
        console.log(this.$store.state.name);
        }
    }
}
</script>

<style lang="scss">
fieldset{
    display: flex;
    flex-direction: column;
    >*{
        margin: 5px 0;
    }
    input{
        border-radius: 5px;
        border:0;
        width: 95%;
        outline:0;
        padding : 15px 5px;
        box-shadow: 5px 0px 10px rgba(0,0,0,0.2);
    }
  }  
</style>