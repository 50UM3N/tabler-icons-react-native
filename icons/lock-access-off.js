import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconLockAccessOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock-access-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 8v-2c0 -.554 .225 -1.055 .588 -1.417" /><Path d="M4 16v2a2 2 0 0 0 2 2h2" /><Path d="M16 4h2a2 2 0 0 1 2 2v2" /><Path d="M16 20h2c.55 0 1.05 -.222 1.41 -.582" /><Path d="M15 11a1 1 0 0 1 1 1m-.29 3.704a0.997 .997 0 0 1 -.71 .296h-6a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h2" /><Path d="M10 11v-1m1.182 -2.826a2 2 0 0 1 2.818 1.826v1" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconLockAccessOff;