const state = {
    rooms: []
  };
  
  const mutations = {
    HOTELS(state, rooms) {
  
      state.hotels = hotels;
    }
  };
  
  const getters = {
    getHotels: state => {
      return state.rooms;
    }
  };
  
  export default {
    state,
    mutations,
    getters
  };
  