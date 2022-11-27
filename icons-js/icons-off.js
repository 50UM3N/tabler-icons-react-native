import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconIconsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-icons-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.01 4.041a3.5 3.5 0 0 0 2.49 5.959c.975 0 1.865 -.357 2.5 -1m.958 -3.044a3.503 3.503 0 0 0 -2.905 -2.912" /><Path d="M2.5 21h8l-4 -7z" /><Path d="M14 3l7 7" /><Path d="M14 10l7 -7" /><Path d="M18 14h3v3m0 4h-7v-7" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconIconsOff;