<template>
  <div class="smooth-cnc-wrapper">
    <div class="smooth-screen">
      <img :src="images.smoothScreenImage" style="width: 760px">
      <div id="comment-button" @click="toggleCommentForm">
        <img id="comment-button-img" :src="images.commentButton">
        <span>COMMENT MSG</span>
      </div>
      <ul id="mode-buttons" class="device-modes">
        <li
          v-for="mode in deviceModes"
          class="device-mode"
          :class="{ 'active-mode': isActive == mode.id }"
          :style="{ backgroundColor: mode.color }"
          :key="mode.id"
          @click="changeDeviceCurrentMode(mode)"
          >{{ mode.title }}
        </li>
      </ul>
       <MyClock />
    </div>
    <CommentForm
      v-if="showCommentForm"
      :currentModeTitle="currentMode"
      :toggleCommentForm="toggleCommentForm"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import CommentForm from './CommentForm.vue';
import MyClock from './MyClock.vue';
const APP_LOG_LIFECYCLE_EVENTS = true;
export default Vue.extend({
  name: 'SmoothScreen',
  components: { CommentForm, MyClock },
  data() {
    return {
      images: {
        smoothScreenImage: require('../assets/img/SmoothAiMainScreen.png'),
        commentButton: require('../assets/img/hex-button.svg')
      },
      showCommentForm: false,
      isActive: false
    }
  },
  methods: {
    toggleCommentForm() {
      this.showCommentForm = !this.showCommentForm;
    },
    changeDeviceCurrentMode(mode) {
      this.$store.dispatch('saveDeviceCurrentModeTitle', mode.title)
      this.isActive = mode.id;
    }
  },
  computed: {
    deviceModes: function() {
      return this.$store.getters.getDeviceModes;
    },
    currentMode: function() {
      return this.$store.getters.getDeviceCurrentModeTitle;
    }
  },
  beforeCreate() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeCreate')
    }
  },
  created() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('created')
    }
    this.$store.dispatch('initStoreDevice');
  },
  beforeMount() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeMount')
    }
  },
  mounted() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('mounted')
    }
  },
  beforeUpdate() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeUpdate')
    }
  },
  updated() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('updated')
    }
  },
  beforeDestroy() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeDestroy')
    }
  },
  destroyed() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('destroyed')
    }
  },
});
</script>
<style lang="scss" scoped>
.smooth-cnc-wrapper {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.smooth-screen {
  position: relative;
  width: fit-content;
  display: flex;
  margin: 0 auto;
}
#comment-button {
  position: absolute;
  bottom: 72px;
  right: 64px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  span {
    color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8rem;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;
  }
  #comment-button-img:hover {
    filter: invert(41%) sepia(90%) saturate(3581%) hue-rotate(3deg) brightness(105%) contrast(106%);
    opacity: 0.8;
  }
   &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);

  }
}
.device-modes {
  position: absolute;
  top: 1px;
  right: 7px;
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
}
.device-mode {
  user-select: none;
  opacity: 0.5;
  width: 71px;
  height: 15px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  margin: 2px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);

  }
}
.active-mode {
  opacity: 1;
}
</style>