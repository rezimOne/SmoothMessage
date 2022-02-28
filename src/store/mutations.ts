import { Device, LogRecord, State } from "./types";

const mutations = {
  setStoreDevice: (state: State, device: Device) => {
    state.device = device
  },
  setDeviceCurrentModeTitle: (state: State, payload: string) => {
    state.device.signals.currentMode = payload;
  },
  setLogRecord: (state, payload: LogRecord) => {
    state.logRecordTable.push(payload);
  },
};
export default mutations;