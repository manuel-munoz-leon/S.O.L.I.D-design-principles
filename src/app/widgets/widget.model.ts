export interface Widget {
  text: string;
  btnText: string;
  isPlay: boolean;
  videoAction: string;
  logData: () => void;
  toggleVideo: () => void;
}
