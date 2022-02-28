<template>
<div>
  <button class="report-button" @click="createReport">REPORT</button>
  <div class="report-wrapper">
    <ul class="report-layout"
      v-for="logRecord in logRecords" :key="logRecord.id">
      <li class="report-record">
        <span>{{ logRecord.timeStamp }}</span>
        <div class="mode-color" :style="{ backgroundColor: logRecord.modeColor }"></div>
        <span>{{ logRecord.modeTitle }}</span>
        <span>{{ logRecord.comment }}</span>
      </li>
    </ul>
  </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Logs',
  data(){
    return {
      showReport: false,
      logRecords: []
    }
  },
  methods: {
    createReport() {
      this.logRecords = this.$store.getters.getLogRecords;
      console.log(this.logRecords);
    }
  }
})
</script>
<style lang="scss" scoped>
.report-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.report-button {
  width: 90px;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 35px;
  border: none;
  background-color: #646466;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  line-height: 100%;
  font-family: 'Courier New', Courier, monospace;
}
.report-button:hover {
  cursor: pointer;
  background-color: #ff5901;
}
.report-button:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
.report-layout {
  display: flex;
  flex-direction: column;
  border: 1px solid #282829;
  width: 95%;
  padding: 0;
  margin: 5px;
}
.mode-color {
  height: 16px;
  width: 30px
}
.report-record {
  list-style: none;
  display: flex;
  flex-direction: row;
  background-color: rgb(236, 234, 234);
  font-weight: 500;
  align-items: flex-start;
  padding: 5px;
  gap: 10px;
}
</style>