<template>
  <fieldset>
      <label :for="input">{{whatFor}}</label>
      <input type="text" name="" v-model="input">
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
            default: 'username',
            required: false,
            
        }
    },
    beforeRouteEnter (to, from, next) {
        this.$store.commit('updateName', this.input);
        this.$store.state.username;
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