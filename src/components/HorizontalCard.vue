<template>
  <v-app id="inspire">
    <v-card class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-row dense>
                <v-col class="padding" cols="4">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="50vh"
                    width="auto"
                  ></v-img>
                </v-col>
                <v-col cols="8">
                  <v-card-title class="headline">Name of the Hotel</v-card-title>

                  <v-card-subtitle>Description:Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</v-card-subtitle>

                  <v-card-subtitle>Rating:Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</v-card-subtitle>

                  <v-card-actions>
                    <v-btn text>Details</v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>
<script>
export default {
  name: "HorizontalCard"
};
</script>

<style lang="scss" scoped>
.padding{
  padding:0px

}
</style>