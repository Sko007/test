const state = {
    rooms: []
  };
  
  const mutations = {
    ROOMS(state, rooms) {
  
      state.rooms = rooms;
    }
  };
  
  const getters = {
    getRooms: state => {
        console.log("state.rooms", state.rooms)
      return state.rooms;
    }
  };
  
  export default {
    state,
    mutations,
    getters
  };
  