import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            albums: []
        },
        mutations: {
            add (state, payload) {
                state.albums = payload
            }
        }
    })
}


export default createStore

/** 
 * a parallel between react redux and vue vuex
 * store is store
 * mutations are reducers
 * actions are thunks
*/