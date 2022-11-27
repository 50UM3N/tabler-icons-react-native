import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAlarmOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35 -2.645a7 7 0 0 0 -8.536 -8.56" /><Path d="M12 12v1h1" /><Path d="M5.261 5.265l-1.011 .735" /><Path d="M17 4l2.75 2" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconAlarmOff;