import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconHomeInfinity({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-infinity" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 14v-2h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h2.5" /><Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.75 1.032" /><Path d="M15.536 17.586a2.123 2.123 0 0 0 -2.929 0a1.951 1.951 0 0 0 0 2.828c.809 .781 2.12 .781 2.929 0c.809 -.781 -.805 .778 .004 -.003l1.46 -1.41l1.46 -1.419" /><Path d="M15.54 17.582l1.46 1.42l1.46 1.41c.809 .78 -.805 -.779 .004 .002s2.12 .781 2.929 0a1.951 1.951 0 0 0 0 -2.828a2.123 2.123 0 0 0 -2.929 0" /></Svg>;
}
export default IconHomeInfinity;