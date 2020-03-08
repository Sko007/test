import axios from "axios";

export const loadHotels = ({ commit }) => {
  console.log("loadHotels in actions.js is executed");

  axios
  .get("http://localhost:3000/hotels")
  .then(hotels => {
    const hotelRooms = hotels.data.rooms
    console.log("rooms", hotelRooms);

    console.log("result", hotels.data);
    commit("HOTELS", hotels.data);
  })
    .catch(error => console.log(error));
};


export const loadHotel = ({ commit }) => {
  console.log("loadHotels in actions.js is executed");

  axios
    .get("http://localhost:3000/hotels/1")
    .then(hotel => {
      // const hotel = hotel.data.rooms
      console.log("actions fetch single room", hotel)
      commit("HOTEL", hotel.data);
    })
    .catch(error => console.log(error));
};

export const loadRooms = ({ commit }) => {

  axios
    .get("http://localhost:3000/hotels/1/rooms")
    .then(rooms => {
      // const hotelRooms = hotels.data.rooms
      console.log("actions fetch rooms", rooms)
      commit("ROOMS", rooms.data.data);
    })
    .catch(error => console.log(error));
};
