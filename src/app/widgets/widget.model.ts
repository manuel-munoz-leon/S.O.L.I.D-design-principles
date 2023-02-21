export interface Widget extends Logger {
  text: string;
  btnText: string;
  
}

export interface Toggler {
  isPlay: boolean;
  videoAction: string;
  toggleVideo: () => void;
}

export interface Logger {
  logData: () => void;
}

export interface Reloadable {
  reload: () => void;
}
