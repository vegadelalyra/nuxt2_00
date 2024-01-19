import axios from 'axios'

export default function( { params, store } ) {
    
    const baseURL = artist => `https://itunes.apple.com/search?term=${artist}&entity=album`

    return axios.get(baseURL(params.id))
        .then(response => {
            store.commit('add', response.data.results)
        })
}