import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: 'Dummy Name',
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
    assignUsername(state , {payload} ){
      this.username = payload.name;
      this.username += payload.surname;
    },
    updateName(state,value){
      this.username += value;
    }
  },
  actions: {
  },
  modules: {
  },
});
