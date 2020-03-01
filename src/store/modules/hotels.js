
const state = {
  hotels: []
};

const mutations = {
  "HOTELS" (state, hotels) {
      console.log("mutations get executed now")
      console.log("hotels", hotels)
      console.log("state.hotels", state.hotels)

    state.hotels = hotels;
    console.log("check state ", state.hotels)


  }
};
console.log("check state ", state.hotels)

// const actions = {
    
//   loadHotels: ({ commit }, hotels) => {
//       console.log("inside actions in hotel modul")
//     commit("HOTELS", hotels);

//     console.log("state.hotels actions", state.hotels)
//     console.log("hotels actions", hotels)

//   }
// };

const getters = {
  getHotels: state => {
    return state.hotels;
  }
};

export default {
  state,
  mutations,
//   actions,
  getters
};
