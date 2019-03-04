export const state = () => ({
    counter: 0,
    products: [],
    token : '',
    user_id : '',
    brands : [],
    hotProducts : [],
  })
  
  export const mutations = {
    brands (state, payload) {
      state.brands = payload
    },
    products (state, payload) {
      state.products = payload
    },
    deleteProduct (state, index){
      state.products.splice(index, 1)
    },
    hotProducts (state, payload){
      state.hotProducts = payload
    },
    deleteHotProduct (sttate, index) {
      state.hotProducts.splice(index, 1)
    },
    token (state , payload){
      state.token = payload
    },
    user_id (state, payload) {
      state.user_id = payload
    },
  }  
  // ACTION

  export const actions = {
    deleteProduct ({commit}, index) {
      commit('deleteProduct')
    },
    deleteHotProduct ({commit}, index) {
      commit('deleteHotProduct')
    },
    brands ({commit}, payload){
      commit('brands', payload)
    },
    products ({commit}, payload){
      commit('products', payload)
    },
    hotProducts ({commit} , payload) {
      commit ('hotProducts', payload)
    },
    sortMaxToMinProducts ({commit}, payload) {
      let  temp =  0 ;  
      for  ( let  i =  0 ; i <payload.length -  1 ; i ++) {  
          for  ( let  j =  0 ; j <payload.length -  1  - i; j ++) {  
              if  (payload [j].id < payload [j +  1 ].id) {  
                  temp = payload [j];  
                  payload [j] = payload [j +  1 ];  
                  payload [j +  1 ] = temp;  
              }  
          }  
      }
      commit('products', payload)
    },
    sortMinToMaxProducts ({commit}, up, payload) {
      let  temp =  0 ;  
      for  ( let  i =  0 ; i <payload.length -  1 ; i ++) {  
          for  ( let  j =  0 ; j <payload.length -  1  - i; j ++) {  
              if  (payload [j].id > payload [j +  1 ].id) {  
                  temp = payload [j];  
                  payload [j] = payload [j +  1 ];  
                  payload [j +  1 ] = temp;  
              }  
          }  
      }
      commit('products', payload)

    },
    token ({commit}, payload){
      commit('token', payload)
    },
    user_id ({commit}, payload){
      commit('user_id', payload)
    },



  }