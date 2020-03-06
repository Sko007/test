<template>
  <div id="app">
    <!-- <v-app id="inspire"> -->
    <v-simple-table fixed-header height="500px" >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- </v-app> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

  computed: {
    ...mapGetters({
      hotels: "getHotels"
    })
  }
};
</script>


<style>
</style>