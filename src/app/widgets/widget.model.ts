export interface Widget extends Logger {
  text: string;
  btnText: string;
}

export interface Playdable {
  isPlay: boolean;
  videoAction: string;
  toggleVideo: () => void;
}

export interface Logger {
  logData: () => void;
}
