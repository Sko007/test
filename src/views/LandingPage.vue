<template>
  <v-app id="inspire">
  
    <HorizontalCard 
    v-for="(hotel, index) in hotels" 
    :key="index" 
    :data="hotel" 
    />
  </v-app>
  
</template>

<script>
import HorizontalCard from "../components/HorizontalCard";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  components: {
    HorizontalCard
  },

  computed: {
    ...mapGetters({
      hotels: "getHotels"
    })
  },

  methods: {
    ...mapActions(["loadHotels"])
  },

  created() {
    console.log("created is executed");
    this.loadHotels();
  }
};
</script>

<style scoped>
</style>