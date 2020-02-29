<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Trivago.svg">
    <Hotels msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hotels from '@/components/Hotels.vue'

export default {
  name: 'Home',
  components: {
    Hotels
  }
}
</script>
