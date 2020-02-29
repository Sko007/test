<template>
  <v-app>
    <v-app-bar color="#385F73" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Trivago Logo"
          class="shrink mr-2"
          contain
          src="./assets/Trivago.svg"
          transition="scale-transition"
          width="140"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/" target="_blank" text>
        <span class="mr-2">Login</span>
        <v-icon>mdi-account</v-icon>
        <!-- <v-icon>mdi-account-off</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-content>
      <Hotels />

            <HorizonalCard />
        
      
    </v-content>
  </v-app>
</template>

<script>
import Hotels from "./components/Hotels";
import HorizonalCard from "./components/HorizontalCard";

export default {
  name: "App",

  components: {
    Hotels,
    HorizonalCard
  },

  data: () => ({
    //
  })
};
</script>
