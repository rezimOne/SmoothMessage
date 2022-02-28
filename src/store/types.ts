export interface Device {
  id : string,
  name:string,
  signals: {
    currentMode: string
  },
  modes: Modes
}
export interface Modes {
  [x: string]: any;
  [key: number]: {
    id: number,
    title: string,
    color: string,
    status: string,
    description: string,
    alerts: string[]
  }
}
export type LogRecord = {
  id: number,
  timeStamp: string,
  modeTitle: string,
  modeColor: string,
  comment: string
}
export interface State {
  device: Device,
  logRecordTable: LogRecord
}