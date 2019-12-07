<template>
  <div class="about">
    <div class="game">
       <div class="page-title">
      <h3 class="pre-title">Mine</h3>
      <img src="../assets/Subtract.png" alt="" srcset="">
      <h3 class="sub-title">Sweeper</h3>
    </div>
    <div class="upbar">
      <fieldset>
       <input v-model="name">  
      </fieldset>
      <fieldset>
       <input type="score">  
      </fieldset>
      <button @click="restart" class="restart">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8103 13C20.4158 13 20.8914 13.5288 20.7495 14.1174C19.7973 18.0663 16.2413 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.5337 3 18.5918 5.03656 20.0645 8H17.7453C16.4804 6.18652 14.3787 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.2211 19 17.9341 16.8243 18.7495 13.8624C18.8838 13.3748 19.3047 13 19.8103 13Z" fill="white"/>
<rect x="19" y="4" width="2" height="6" rx="1" fill="white"/>
<rect x="15" y="8" width="6" height="2" rx="1" fill="white"/>
</svg>
  Restart
      </button>
    </div>
    <div class="d-flex">
    <GameField @failed="showRestart"/>
    <ScoreBoard/>
    </div>
    </div>
  </div>
</template>

<script>
import store from './../store/index';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard'
import GameField from './GameField.vue'
export default {
  data(){
    return{
      name: ''
    }
  },
  components:{
    GameField,
    ScoreBoard
  },
  methods:{
    showModal($event){
      console.log($event);
      alert('you failed');
    },
    restart(){
        
    },
    showRestart(){
      console.log('happened');
    }
  },
   beforeMount(){
     this.name = this.$store.state.username;
   }
}
</script>

<style lang="scss" scoped>
  .upbar{
    display: flex;
    justify-content: center;
    font-size: 25px;  
    button{
      display:flex;
      align-items: center;color: #fff;
      background-color: #FF8A00;

      *{
        padding: 5px;
      }
    }
  }
  .d-flex{
    display: flex;
  }
</style>