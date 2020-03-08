import Vue from "vue";
import Vuex from "vuex";

import hotels from "./modules/hotels";
import rooms from "./modules/rooms"

import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
      hotels,
      rooms
    }
});

console