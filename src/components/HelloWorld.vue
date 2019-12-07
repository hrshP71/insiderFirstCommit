<template>
  <div class="welcome-page">
    <div class="page-title">
      <h3 class="pre-title">Mine</h3>
      <img src="../assets/Subtract.png" alt="" srcset="">
      <h3 class="sub-title">Sweeper</h3>
    </div>
    <div class="fields">
      <InputField whatFor="Name"/>
      <InputField whatFor="Surname"/>
         <router-link to="/game" class="button-like">
      Start Game
         </router-link> 
    </div>
  </div>
</template>

<script>
import InputField from './HelloWorldComponents/InputField';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components:{
    InputField
  },
  watch:{
    $route (to, from){
          this.$store.commit('assignUsername' , {
          name: 'Test',
          surname:'Test'
        })
    }
} 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.welcome-page{
  max-width: 50vw;
  margin-left: 25vw;
}
  .button-like{
    background-color: #25A35C;
    border-radius: 8px; 
    padding: 10px;
    margin-top: 15px;
    color: white;
    height: 60px;
    text-decoration: none;
    width: 100%;
  }
.page-title{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .pre-title{
    color: #FF8A00;
    font-weight: 700;
    font-size: 36px;
    padding-right: 20px;
  }
  .sub-title{
    color: #00BCE5;
    font-weight: 700;
    font-size: 36px;
    padding-left: 20px;
  }
}
</style>
