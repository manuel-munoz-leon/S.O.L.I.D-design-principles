export interface Widget {
  text: string;
  btnText: string;
  logData: () => void;
  reload: () => void;
}

export interface Toggler {
  isPlay: boolean;
  videoAction: string;
  toggleVideo: () => void;
}
