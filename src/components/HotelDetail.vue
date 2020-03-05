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
                    <h1>Was ist das hier</h1>
                </v-col>
              </v-row>
                <RoomTable></RoomTable>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>

</template>



<script>
import RoomTable from "./RoomTable"

export default {
     components: {
    RoomTable
  },
}
</script>