import axios from "axios";

export const loadHotels = ({ commit }) => {
  console.log("loadHotels in actions.js is executed");

  axios
    .get("http://localhost:3000/hotels")
    .then(hotels => {
      console.log("result", hotels.data);
      commit("HOTELS", hotels.data);
    })
    .catch(error => console.log(error));
};
