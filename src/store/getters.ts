import { LogRecord, Modes, State } from "./types";

const getters = {
  getDeviceModes: (state: State): Modes => {
    return state.device.modes;
  },
  getDeviceCurrentModeTitle: (state: State): string => {
    return state.device.signals.currentMode;
  },
  getDeviceCurrentModeColor: (state: State) => (title: string): string => {
    return state.device.modes.find((item) => item.title === title)
  },
  getModesByTitle: (state: State) => (title: string): string => {
    return state.device.modes.find(mode => mode.title === title)
  },
  getLogRecords: (state: State): LogRecord => {
    return state.logRecordTable;
  },
};
export default getters;