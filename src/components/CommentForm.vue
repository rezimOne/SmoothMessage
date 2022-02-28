<template>
  <div class="form-wrapper">
    <button class="close-button" @click="toggleCommentForm"><p>+</p></button>
    <header class="form-header"><span>CURRENT MODE: {{ currentModeTitle }}</span>
      <div
        class="device-mode-color"
        :style="{ backgroundColor: colorByModeTitle }">
      </div>
    </header>
    <section class="comment-section">
      <textarea
        id="myTextArea"
        class="comment-input"
        type="text"
        name="comment"
        placeholder="Your comment here..."
        v-model="commentMessage"
      />
      <div class="functional-buttons">
        <button class="submit-button" @click="addLogRecord">SUBMIT</button>
        <div class="menu-button" @click="toggleMenu">
          <img id="dropdown-button" :src="images.dropdownButton">
        </div>
        <button class="erase-button" @click="eraseComment"><p>ERASE</p></button>
      </div>
      <div class="menu-wrapper">
        <ul class="menu-list" v-show="showMenuItems">
          <li class="menu-item" v-for="item in alertsList" :key="item.id" @click="saveComment(item)">
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CommentForm',
  props: {
    currentModeTitle: String,
    toggleCommentForm: Function
    },
  data() {
    return {
      showMenuItems: false,
      images: {
        dropdownButton: require('../assets/img/dropdown-icon.svg')
      },
      alertsList: [],
      commentMessage: '',
    }
  },
  methods: {
    addLogRecord() {
      this.newLogRecord = {
        id: this.$store.getters.getLogRecords.length + 1,
        timeStamp: this.setDate(),
        modeTitle: this.$store.getters.getDeviceCurrentModeTitle,
        modeColor: this.colorByModeTitle,
        comment:this.commentMessage
      }
      this.$store.dispatch('saveLogRecord', this.newLogRecord);
      console.log(this.$store.getters.getLogRecords);
    },
    toggleMenu() {
      if (this.currentModeTitle) {
        this.showMenuItems = !this.showMenuItems;
      }
    },
    saveComment(item) {
      this.commentMessage = item;
    },
    eraseComment() {
      this.commentMessage = '';
    },
    setDate() {
      const date = new Date();
      const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getUTCDate()]
      const [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]
      return `${year}/${(month < 10) ? '0' + month : month}/${(day < 10) ? '0' + day : day} ${(hours < 10) ? '0' + hours : hours}:${(minutes < 10) ? '0' + minutes : minutes}:${(seconds < 10) ? '0' + seconds : seconds}`
    }
  },
  computed: {
    colorByModeTitle() {
      if (this.currentModeTitle) {
        const currentModeColor = this.$store.getters.getModesByTitle(this.currentModeTitle);
        return currentModeColor.color;
      }
      return 'no mode selected';
    },
  },
  updated() {
    if (this.currentModeTitle) {
      this.alertsList = this.$store.getters.getModesByTitle(this.currentModeTitle).alerts;
    }
  },
});
</script>
<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  padding: 5px;
  z-index: 1;
  position: absolute;
  height: 400px;
  width: 350px;
  background-color: #030303;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1.5px solid #ff5901;
  border-radius: 5px;
  box-shadow: 0 0 15px 2px #3a3a3b;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
}
.form-header {
  color: white;
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  span {
    padding: 10px;
    margin-left: 13px;
  }
}
.device-mode-color {
  user-select: none;
  height: 4px;
}
.comment-section {
  border: 1px solid #ff5901;
  display: flex;
  flex-direction: column;
  height: 320px;
  padding: 10px;
  background-color: #444446;
}
.comment-input {
  font-family: 'Courier New', Courier, monospace;
  background-color: #ececec;
  height: 250px;
  min-height: 80px;
  position: relative;
  border: unset;
  border-radius: 5px;
  padding: 5px;
  font-size: 1.1rem;
  font-weight: 600;

  border: 3px solid #ff5901;
  border-radius: 4px;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  resize: none;

}
.functional-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin-top: 10px;
}
.menu-button {
  position: relative;
  width: 90px;
  height: 35px;
  display:flex;
  align-items: center;
  background-color: #ff5901;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #ffffff;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
}
.submit-button {
  width: 90px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: #646466;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 100%;
  font-family: 'Courier New', Courier, monospace;
  &:hover {
    cursor: pointer;
    background-color: #ff5901;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
}
.erase-button {
  width: 90px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: #646466;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 100%;
  font-family: 'Courier New', Courier, monospace;
  p {
    margin: 0;
  }
  &:hover {
    cursor: pointer;
    background-color: #ff5901;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
}
#dropdown-button {
  width: 32px;
  position: relative;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
}
.menu-item {
  display: flex;
  list-style: none;
  font-size: 1.1rem;
  color: #ffffff;
  background-color: #ff5901;
  border-radius: 5px;
  justify-content: center;
  text-align: center;
  width: 47%;
  padding: 2px;
  &:hover {
    background-color: #646466;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
}
ul.menu-list {
  position: relative;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px
}
.close-button {
  position: absolute;
  right: 5px;
  top: 5px;
  text-align: center;
  line-height: 50%;
  cursor: pointer;
  height: 35px;
  width: 35px;
  border: 1.5px solid #ff5901;
  border-radius: 4px;
  background-color: #646466;
  color: #ff5901;
  p {
    transform: rotate(45deg);
    font-size: 2.1rem;
    margin:auto;
  }
  &:hover {
    border: 1.5px solid #646466;
    background-color: #ff5901;
    color: #646466;
  }
}

</style>