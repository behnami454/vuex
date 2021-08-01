import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        behnam:[
            {name:'ali', age:20},
            {name:'reza', age:21},
            {name:'mina', age:22}
            
        ]
    },
    getters:{
        random:state => {
            var random = state.behnam.map(behnami => {
                return{
                    name:'*'+ behnami.name +'*',
                    age:behnami.age
                }
            });
            return random;
        }
    },
    mutations:{
        reduce:state => {
            state.behnam.forEach(behnami => {
                behnami.age -=1;
            })
        }
    },
    actions:{
        reduce:context => {
            setTimeout(function(){
                context.commit('reduce')
            }, 1000)
        }
    }
})