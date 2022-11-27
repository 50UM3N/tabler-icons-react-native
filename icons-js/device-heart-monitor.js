import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconDeviceHeartMonitor({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-heart-monitor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M4 9h6l1 -2l2 4l1 -2h6" /><Path d="M4 14h16" /><Path d="M14 17v.01" /><Path d="M17 17v.01" /></Svg>;
}
export default IconDeviceHeartMonitor;