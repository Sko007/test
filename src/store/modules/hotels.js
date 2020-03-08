// 
const state = {
  hotels: [],
  hotel:[]
};

const mutations = {
  HOTELS(state, hotels) {

    state.hotels = hotels;
  },


  HOTEL(state, hotel) {

    state.hotel = hotel;
  }
};



const getters = {
  getHotels: state => {

    return state.hotels;
  },
  
  getHotel: state => {
    console.log("check state", state.hotel)
    return state.hotel;
  }

};



export default {
  state,
  mutations,
  //   actions,
  getters
};
