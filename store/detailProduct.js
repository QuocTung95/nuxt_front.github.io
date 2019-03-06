export const state = () => ({
    product: [],
    sub_image : []
  })
  
  export const mutations = {
    product (state, payload) {
        state.product = payload
    },
    sub_image (state , payload) {
      state.sub_image = payload
    }
  }

  export const actions = {
    sub_image ({commit}, payload){
      commit('sub_image', payload)
    },
    product ({commit}, payload){
      commit('product', payload)
    },
  }