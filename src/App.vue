<template>
  <div id="app">
    <Navbar />
    <div class="components">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue';
export default Vue.extend({
  name: 'App',
  components: {
    Navbar
  },
});
</script>
<style lang="scss" scoped>
#app {
  font-family: 'Courier New', Courier, monospace;
}
.components {
  min-height: 65vh;
  margin-top: 45px;
}
</style>
