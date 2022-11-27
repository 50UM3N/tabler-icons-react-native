import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconDeviceSpeakerOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-speaker-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" /><Path d="M11.114 11.133a3.001 3.001 0 1 0 3.754 3.751" /><Path d="M12 7v.01" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconDeviceSpeakerOff;