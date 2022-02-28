import { LogRecord, Modes } from './types';
import axios from "axios";

const actions = {
  initStoreDevice({ commit }) {
    axios.get('./mockData.json')
    .then((response) => {
      console.log(response.data.device);
      commit('setStoreDevice', response.data.device)
    })
    .catch((error) => { console.log(error) })
  },
  saveDeviceCurrentModeTitle({ commit }, payload: Modes): string {
    commit('setDeviceCurrentModeTitle', payload);
    return;
  },
  saveLogRecord({ commit }, payload: LogRecord ): {} {
    commit('setLogRecord', payload)
    return;
  }
};
export default actions;