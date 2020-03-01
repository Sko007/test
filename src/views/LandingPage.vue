<template>
  <div>
    <HorizontalCard />
  </div>
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
      Hotels: "getHotels"
    })
    // getHotels() {
    //   console.log("inside Landingpage", this.$store.getters.getHotels )
    //   return this.$store.getters.getHotels;
    // }
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