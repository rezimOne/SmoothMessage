<template>
  <div class="clock">TIME:
    <span v-text="clock.currentTime"></span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Clock',
   data() {
     return {
       clock: {
         currentTime: '00:00:00',
         clockInterval: null
      }
    }
  },
  methods: {
    setCurrentTime() {
      const [hours, minutes, seconds] = [new Date().getHours(),new Date().getMinutes(), new Date().getSeconds()];
      this.clock.currentTime = `${(hours < 10) ? '0' + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
      return this.clock.currentTime;
    },
  },
  mounted() {
    this.clock.clockInterval = setInterval(() => this.setCurrentTime(), 1000)
  },
}
</script>
<style lang="scss" scoped>
.clock {
  position: absolute;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  width: 150px;
  padding: 2px;
  text-align: center;
  top: 2px;
  left: 390px;
}
</style>