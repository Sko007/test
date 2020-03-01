const state = {
  hotels: []
};

const mutations = {
  HOTELS(state, hotels) {
    console.log("hotels", hotels);

    state.hotels = hotels;
  }
};

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
