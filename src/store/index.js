import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'Ozgur',
    surname:'Seyidoglu',
    previousScore: [{
        name: "test",
        score: 555
    },{
      name: "test",
      score: 555
  },{
    name: "test",
    score: 555
},{
  name: "test",
  score: 555
},{
  name: "test",
  score: 555
}
  ]
  },
  mutations: {
    updateName(state,value){
      this.state.name = value;
    },
    updateSurname(state,value){
      this.state.surname = value;
    },
    newHighScore(state, payload){
      this.state.previousScore.push(payload);
    }
  },
  actions: {
  },
  modules: {
  },
});
