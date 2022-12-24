import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconAlarmSnooze({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm-snooze" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={13} r={7} /><Path d="M10 11h4l-4 4h4" /><Path d="M7 4l-2.75 2" /><Path d="M17 4l2.75 2" /></Svg>;
}
export default IconAlarmSnooze;