<template>
  <header>
    <div class="navigation-wrapper">
      <nav>
        <ul class="navigation">
          <li>
            <router-link class="link" :to="{ name: 'SmoothScreen' }">SMOOTH SCREEN</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Logs' }">LOGS</router-link>
          </li>
        </ul>
      </nav>
    </div>
   </header>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Navbar'
})
</script>
<style lang="scss" scoped>
.navigation-wrapper {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}
header {
  top: 0;
  z-index: 99;
  width: 100%;
  height: 40px;
  position: fixed;
  box-sizing: border-box;
  border-bottom: solid 2px #ff5901;
  background-color: #19191a;
  nav {
    display: flex;
    max-width: fit-content;
    flex-direction: row;
    margin: 0 auto;
    ul,
    .link {
      list-style: none;
      text-decoration: none;
      font-weight: 700;
      color: #e2dedc;
      padding: 0;
    }
    li {
      margin: 0 16px;
    }
    .link {
      font-size: 1.1rem;
      &:hover {
        color: #00b7ff;
      }
      &.router-link-exact-active {
        color: #ff5901;
      }
    }
    .navigation {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 9px;
    }
  }
}
</style>