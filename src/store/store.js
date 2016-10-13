import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        viewLoad: false,
        user: false
    },
    actions: {
        deneme: ({ commit, dispatch, state }, type) => {
            console.log(1);
        }
    },
    mutations:{
        viewLoad: (state,  status ) => {
            state.viewLoad = status;
        }
    }
})